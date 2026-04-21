import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "orders.db")

def init_db():
    """Initialize the database with a sample orders table."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    # Drop table to apply schema changes easily for this prototype
    cursor.execute("DROP TABLE IF EXISTS orders")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS orders (
            order_id TEXT PRIMARY KEY,
            customer_name TEXT,
            item TEXT,
            item_type TEXT,
            status TEXT
        )
    """)
    
    sample_orders = [
        ("B73973", "Alice", "Laptop", "Electronics", "Shipped"),
        ("A12345", "Bob", "Headphones", "Electronics", "Pending"),
        ("C98765", "Charlie", "Coffee Maker", "Appliances", "Pending"),
    ]
    cursor.executemany("INSERT INTO orders VALUES (?, ?, ?, ?, ?)", sample_orders)
    
    conn.commit()
    conn.close()

def get_order(order_id: str):
    """Fetch order details by ID."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM orders WHERE order_id = ?", (order_id,))
    order = cursor.fetchone()
    conn.close()
    if order:
        return {
            "order_id": order[0], 
            "customer_name": order[1], 
            "item": order[2], 
            "item_type": order[3],
            "status": order[4]
        }
    return None

def update_order_status(order_id: str, new_status: str):
    """Update the status of an order."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE orders SET status = ? WHERE order_id = ?", (new_status, order_id))
    conn.commit()
    conn.close()
    return f"Order {order_id} status updated to {new_status}."

def add_order(order_id: str, customer_name: str, item: str, item_type: str, status: str = "Pending"):
    """Add a new order to the database."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO orders VALUES (?, ?, ?, ?, ?)", (order_id, customer_name, item, item_type, status))
        conn.commit()
        return f"Order {order_id} added successfully."
    except sqlite3.IntegrityError:
        return f"Order {order_id} already exists."
    finally:
        conn.close()

if __name__ == "__main__":
    init_db()
    print("Database re-initialized with item_type column.")
