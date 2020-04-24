DROP DATABASE IF EXISTS client;
CREATE DATABASE client;
USE client_profile

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email TEXT,
    password TEXT
);