# Functionality Overview

This application is an AI-powered Ecommerce Support Agent built with LangGraph, Gemini, and Streamlit. It manages orders through a SQLite database and provides a conversational interface for users.

## Core Capabilities

### 1. Order Management
- **Check Order Status**: Users can inquire about the current status of an order (e.g., Pending, Shipped, Cancelled).
- **Cancel Orders**: Users can request to cancel an order. The agent checks the database and only allows cancellation if the order has not yet been "Shipped".
- **Create New Orders**: The agent can register new orders in the system, requiring details such as Customer Name, Item, and Item Type.

### 2. Intelligent Conversations
- **Persistent Memory**: Using LangGraph's `MemorySaver`, the agent remembers conversation history within a session (via `thread_id`).
- **Product Insights**: For every order discussed, the agent identifies the `item_type` and generates an interesting fact or "fun fact" related to that category (e.g., Electronics, Appliances) to engage the user.
- **Context Awareness**: The agent is aware of the specific Order ID being discussed throughout the conversation.

### 3. Database Integration
- **Relational Storage**: Uses a SQLite database (`data/orders.db`) to persist order data.
- **Real-time Updates**: Status changes (like cancellations) are written directly to the database.

### 4. User Interface
- **Streamlit Console**: A clean, web-based chat interface for real-time interaction.
- **Support Agent Persona**: The AI adopts a professional yet engaging persona suitable for ecommerce customer support.

## Technical Stack
- **AI Orchestration**: LangGraph
- **Language Model**: Google Gemini (gemini-2.5-flash)
- **Frontend**: Streamlit
- **Database**: SQLite
- **Environment**: Python 3.12+
