CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(60),
    department_name VARCHAR(60),
    price DECIMAL(6,2),
    stock_quantity int NOT NULL
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Apple Watch Series 3', 'Electronics', 329.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Echo Smart Speaker With Alexa', 'Electronics', 99.99, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Insta Pot Duo Mini', 'Kitchen & Dining', 79.95, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Handmade Striped Plush Shag Rug', 'Home Decor', 167.69, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hydro Flask Double Wall Vacuum Insulated Stainless Steel Sports Water Bottle 32oz', 'Sports & Outdoors', 44.95, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Black Mountain Exercise Stability Ball with Pump', 'Sports & Outdoors', 15.63, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Under Armour Adult Resistor 3.0 Crew Socks (6-Pack)', 'Sports & Outdoors', 15.58, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('The Greatest Showman Blu-ray', 'Movies & TV', 19.96, 96);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Signature Sleep Memoir 12 Inch Memory Foam Mattress', 'Home & Kitchen', 343.99, 235);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Lacoste Essential Eau de Toilette for Men', 'Fragrance', 62.00, 38);