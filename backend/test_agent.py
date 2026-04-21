from langchain_core.messages import HumanMessage
from .my_agent import graph

def test_cancel_order_agent():
    print("Starting Evaluation...\n")
    
    # 1. Set up the test scenario (The exact test from the book)
    example_order = {"order_id": "B73973"}
    convo = [HumanMessage(content="Please cancel order #B73973. I found a cheaper option elsewhere.")]
    
    # 2. Run the graph
    config = {"configurable": {"thread_id": "test-thread"}}
    result = graph.invoke({"order": example_order, "messages": convo}, config=config)
    
    # 3. Print the conversation for us to see
    print("--- AI Output ---")
    for msg in result["messages"]:
        print(f"{msg.__class__.__name__}: {msg.content}")
    print("-----------------\n")
    
    # 4. The Book's Evaluation Checks (Asserts)
    # Check if the tool was actually triggered in the background
    tool_was_called = any(msg.__class__.__name__ == "ToolMessage" for msg in result["messages"])
    assert tool_was_called, "Fail: Cancel order tool not called"
    
    # Check if the final message contains "cancel" or "shipped"
    final_msg_obj = result["messages"][-1]
    if isinstance(final_msg_obj.content, list):
        final_message = " ".join([item["text"] for item in final_msg_obj.content if "text" in item]).lower()
    else:
        final_message = final_msg_obj.content.lower()
    
    assert "cancel" in final_message or "shipped" in final_message, "Fail: Confirmation/status message missing"
    
    print("✅ Agent passed minimal evaluation.")

if __name__ == "__main__":
    test_cancel_order_agent()