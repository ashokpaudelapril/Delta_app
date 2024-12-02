CREATE DATABASE College;
CREATE database xyz_company;
DROP DATABASE xyz_company;
USE College;

/*
Create table table_name (
column_name1 datatype constraint,
column_name2 datatype constraint,
column_name3 datatype constraint
);
*/

CREATE TABLE Student (
roll_no INT,
name VARCHAR(30),
age INT
);

INSERT INTO Student 
VALUES 
(101, "Adam", 12),
(102, "Aman", 13),
(103, "Bhawana", 14);

SELECT * FROM Student;

/*
Database Queries
CREATE DATABASE dn_name;
CREATE DATABASE IF NOT EXISTS db_name;

DROP DATABASE db_name;
DROP DATABASE IF EXISTS db_name;

SHOW DATABASES;
SHOW TABLES;
*/

SHOW DATABASES;

USE College;
SHOW TABLES;

/* Table Queries: Create, Insert, Update, Alter, Truncate, Delete */

CREATE TABLE user (
id int,
age int,
name varchar(50) NOT NULL,
email varchar(100) UNIQUE,
followers int DEFAULT 0,
following int
CONSTRAINT age_check CHECK (age >=13)
);

/* Constraints
Rules for data in the table

NOT NULL  columns cannot have a null value
UNIQUE    all values in column are different
DEFAULT   sets the default value of a column
CHECK     it can limit the values allowed in a column

salary INT DEFAULT 25000
CONSTRAINT age_check CHECK (age >= 18 AND city = 'Delhi')
*/

CREATE TABLE celebrity (
id int,
age int,
name varchar(50) NOT NULL,
email varchar(100) UNIQUE,
followers int DEFAULT 0,
following int,
CONSTRAINT age_check CHECK (age >=13)
);

/* 
PRIMARY KEY : makes a column unique and not null but used only for one
CREATE TABLE temp (
id int not null,
PRIMARY KEY (id)
);

FOREIGN KEY : prevents actions that would destroy links between tables 
CREATE TABLE temp (
cust_id int,
FOREIGN KEY (cust_id) references customer(id)
)
*/

/*
What are keys?
Keys are special columns in the table

Primary Key
It is a column (or set of columns) in a table that uniquely identifies each row. (a unique id)
There is only 1 PK and it should be NOT null.alter

Foreign Key
A foreign key is a column (or of columns) in a table that refers to the primary key instance
FKs can have duplicate and null values.
There can be multiple FKs.
*/

/*
Select Command
Selects and show data from the DB

syntax
SELECT col1, col2 FROM table_name;

syntax (to show all)
SELECT * FROM table_name;

SELECT DISTINCT age FROM USER // select distinct age from the column
*/

/*
Where Clause
To define some conditions

SELECT col1, col2 FROM table_name
WHERE conditions;
*/



