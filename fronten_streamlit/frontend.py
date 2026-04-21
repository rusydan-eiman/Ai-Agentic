import streamlit as st
import sys
import os

# Add project root to path so backend can be found
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from backend.my_agent import graph
from langchain_core.messages import HumanMessage

st.set_page_config(page_title="UsTerprise", page_icon="🤖")
st.title("UsTerprise")

# Initialize chat history and thread_id in Streamlit session state
if "messages" not in st.session_state:
    st.session_state.messages = []
if "thread_id" not in st.session_state:
    st.session_state.thread_id = "1" # For a single user session

# Display chat messages
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# User Input
if prompt := st.chat_input("How can I help with your order?"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # Run the LangGraph Agent
    with st.chat_message("assistant"):
        # We pass the conversation to our graph
        inputs = {"messages": [HumanMessage(content=prompt)]}
        
        # Use the thread_id for persistence
        config = {"configurable": {"thread_id": st.session_state.thread_id}}
        result = graph.invoke(inputs, config=config)
        
        # Get the final response from the agent
        response = result["messages"][-1].content
        st.markdown(response)
        st.session_state.messages.append({"role": "assistant", "content": response})