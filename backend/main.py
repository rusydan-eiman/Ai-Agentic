from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .my_agent import graph
from data.database import add_order as db_add_order

app = FastAPI()

# This allows your Next.js frontend to talk to your Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    thread_id: str = "default-web-thread"

class OrderRequest(BaseModel):
    order_id: str
    customer_name: str
    item: str
    item_type: str
    status: str = "Pending"

@app.post("/chat")
async def chat(data: ChatRequest):
    # This calls your LangGraph agent
    # We add a thread_id for persistence support
    config = {"configurable": {"thread_id": data.thread_id}}
    
    result = graph.invoke({"messages": [("user", data.message)]}, config=config)
    
    # Get the last message content
    final_message = result["messages"][-1].content
    return {"reply": final_message}

@app.post("/add-order")
async def add_order(order: OrderRequest):
    result = db_add_order(
        order.order_id, 
        order.customer_name, 
        order.item, 
        order.item_type, 
        order.status
    )
    if "already exists" in result:
        raise HTTPException(status_code=400, detail=result)
    return {"message": result}
