CREATE DATABASE IF NOT EXISTS empleadodb;
USE empleadodb;
CREATE TABLE employee(
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary INT(5) DEFAULT NULL,
picture VARCHAR(100) DEFAULT NULL,
PRIMARY KEY(id));

INSERT INTO employee VALUES 
    (1,'JOSE',1000,'jose.jpg'),
    (2,'MARIA',2000,'maria.jpg'),
    (3,'CLAUDIA',3000,'claudia.jpg'),
    (4,'ROSA',4000,'rosa.jpg'),
    (5,'ARMANDO',500,'armando.jpg');

