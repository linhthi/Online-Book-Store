CREATE DATABASE bookshop;
USE bookshop;

# table: category
CREATE table category(
	category_id INT NOT NULL,
    category_name VARCHAR(100),
    PRIMARY KEY (category_id)
);

# table: book
CREATE table book(
	book_id INT NOT NULL AUTO_INCREMENT,
    category_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    price DOUBLE NOT NULL,
    author VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (book_id),
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

# table: order
CREATE TABLE orders(
	order_id INT NOT NULL AUTO_INCREMENT,
    client_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(10) NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    address VARCHAR(200) NOT NULL,
    amount INT NOT NULL,
	order_date DATE NOT NULL,
    delivery_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    PRIMARY KEY (order_id)
);


    
