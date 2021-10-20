DROP DATABASE IF EXISTS barkdb;

CREATE DATABASE barkdb;

\c barkdb

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favorite_breeds;
DROP TABLE IF EXISTS liked_dogs;

DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS companies;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT,
    zipcode CHAR(5)
);

CREATE TABLE favorite_breeds (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users ON DELETE CASCADE,
    breeds TEXT[]
);

CREATE TABLE liked_dogs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users ON DELETE CASCADE,
    dogs TEXT[]
);

INSERT INTO users
  VALUES (1, 'lawrence123', 'lawrence123@gmail.com', 'abc123', '20720'),
         (2, 'curry', 'curry@gmail.com', 'abc123', '19320');

INSERT INTO invoices (comp_Code, amt, paid, paid_date)
  VALUES ('apple', 100, false, null),
         ('apple', 200, false, null),
         ('apple', 300, true, '2018-01-01'),
         ('ibm', 400, false, null);

INSERT INTO industries (code, industry)
  VALUES ('sw', 'Software'),
         ('comp', 'Computer');

INSERT INTO companies_industries
  VALUES ('apple', 'sw'),
         ('apple', 'comp'),
         ('ibm', 'sw');