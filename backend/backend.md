# Backend Architecture & Technical Specification

This document provides a technical overview of the AI agent's backend to assist in design and integration.

## 1. Core Logic: LangGraph Workflow
The agent is orchestrated using **LangGraph**, following a cyclic graph pattern:
- **State**: A `TypedDict` containing:
  - `order`: Meta-data about the current order context.
  - `messages`: A history of the conversation (using `operator.add` for message accumulation).
- **Nodes**:
  - `agent`: The "Brain" (Gemini 2.5 Flash). It receives the prompt and decides if a tool call is needed.
  - `tools`: A standard `ToolNode` that executes Python functions requested by the AI.
- **Routing**: A conditional edge `should_continue` checks for `tool_calls` in the last message to decide whether to loop back to the agent or end the turn.
- **Persistence**: Integrated `MemorySaver` checkpointer for session-based memory using `thread_id`.

## 2. Available Tools (API)
The agent has access to the following backend capabilities:
- `get_order_status(order_id)`: Fetches status, item name, and item type.
- `cancel_order(order_id)`: Validates status (refuses if 'Shipped') and updates database to 'Cancelled'.
- `create_order(order_id, customer_name, item, item_type)`: Inserts a new record into the database.

## 3. Database Schema (SQLite)
Stored in `data/orders.db`.
- **Table**: `orders`
  - `order_id` (TEXT, PK): Unique identifier.
  - `customer_name` (TEXT): Customer who placed the order.
  - `item` (TEXT): Specific product name.
  - `item_type` (TEXT): Category (e.g., Electronics, Appliances) used for fact generation.
  - `status` (TEXT): Current state (Pending, Shipped, Cancelled).

## 4. Integration Requirements
- **Environment**: `.env` file with `GOOGLE_API_KEY`.
- **Imports**: Frontend connects via `from backend.my_agent import graph`.
- **Execution**: `graph.invoke(inputs, config={"configurable": {"thread_id": "..."}})`

## 5. Persona & Logic
The agent is programmed to:
1. Act as a professional ecommerce support representative.
2. Proactively generate interesting facts about a product based on its `item_type`.
3. Enforce business logic (e.g., no cancellations on shipped items).
