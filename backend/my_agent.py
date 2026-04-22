import os
from dotenv import load_dotenv
from typing import TypedDict, Annotated, Literal
import operator

from langchain_core.tools import tool
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import SystemMessage, HumanMessage, ToolMessage
from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode # New import
from langgraph.checkpoint.memory import MemorySaver # New import
from data.database import get_order, update_order_status # New database imports

load_dotenv()

@tool
def get_order_status(order_id: str) -> str:
    """Get the current status of an order."""
    order = get_order(order_id)
    if order:
        return f"Order {order_id} is currently {order['status']}."
    return f"Order {order_id} not found."

@tool
def cancel_order(order_id: str) -> str:
    """Cancel an order that hasn't shipped."""
    order = get_order(order_id)
    if not order:
        return f"Order {order_id} not found."
    
    if order["status"].lower() == "shipped":
        return f"Cannot cancel order {order_id} because it has already shipped."
    
    update_order_status(order_id, "Cancelled")
    return f"Order {order_id} has been successfully cancelled."

def add_order(order_id: str) -> str:
    """Add a new order."""
    order = get_order(order_id)
    if order:
        return f"Order {order_id} already exists."
    
    update_order_status(order_id, "Pending")
    return f"Order {order_id} has been successfully added."

tools = [cancel_order, get_order_status, add_order]
tool_node = ToolNode(tools)

class State(TypedDict):
    order: dict
    messages: Annotated[list, operator.add]

# Simplified "Brain" Node
def call_model(state: State):
    msgs = state["messages"]
    order = state.get("order", {"order_id": "UNKNOWN"})
    
    prompt = (
        f"You are an ecommerce support agent. ORDER ID: {order['order_id']}\n"
        "You can check order status with get_order_status(order_id) and cancel orders with cancel_order(order_id)."
    )
    
    llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0)
    llm_with_tools = llm.bind_tools(tools)
    
    # Just return the response; the graph will handle what happens next
    response = llm_with_tools.invoke([SystemMessage(content=prompt)] + msgs)
    return {"messages": [response]}

# Logic to decide: go to tools or end?
def should_continue(state: State) -> Literal["tools", "__end__"]:
    messages = state['messages']
    last_message = messages[-1]
    if last_message.tool_calls:
        return "tools"
    return "__end__"

def construct_graph():
    workflow = StateGraph(State)

    workflow.add_node("agent", call_model)
    workflow.add_node("tools", tool_node)

    workflow.add_edge(START, "agent")
    
    # The Router: If agent calls a tool, go to 'tools', else END
    workflow.add_conditional_edges(
        "agent",
        should_continue,
    )

    # After tools run, they MUST go back to the agent to summarize the result
    workflow.add_edge("tools", "agent")

    memory = MemorySaver()
    return workflow.compile(checkpointer=memory)

graph = construct_graph()
