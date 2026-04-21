-- MySQL Schema for Orders
CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

CREATE TABLE IF NOT EXISTS orders (
    order_id VARCHAR(50) PRIMARY KEY,
    customer_name VARCHAR(100),
    item VARCHAR(100),
    status VARCHAR(50)
);

-- Insert sample data
INSERT INTO orders (order_id, customer_name, item, status) VALUES
('B73973', 'Alice', 'Laptop', 'Shipped'),
('A12345', 'Bob', 'Headphones', 'Pending'),
('C98765', 'Charlie', 'Coffee Maker', 'Pending')
ON DUPLICATE KEY UPDATE order_id=order_id;
