from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .my_agent import graph

app = FastAPI()

# This allows your Next.js frontend to talk to your Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(data: dict):
    # This calls your LangGraph agent
    # We add a thread_id for persistence support
    thread_id = data.get("thread_id", "default-web-thread")
    config = {"configurable": {"thread_id": thread_id}}
    
    result = graph.invoke({"messages": [("user", data["message"])]}, config=config)
    
    # Get the last message content
    final_message = result["messages"][-1].content
    return {"reply": final_message}
