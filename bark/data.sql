DROP DATABASE IF EXISTS barkdb;

CREATE DATABASE barkdb;

\c barkdb

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favorite_breeds;
DROP TABLE IF EXISTS liked_dogs;

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
    dogs INTEGER[]
);

INSERT INTO users
  VALUES (1, 'lawrence123', 'lawrence123@gmail.com', 'abc123', '20720'),
         (2, 'curry', 'curry@gmail.com', 'abc123', '19320');

INSERT INTO favorite_breeds
  VALUES (1, 1, ARRAY ['siberian-husky', 'pug', 'affenpinscher']),
         (2, 2, ARRAY ['akita', 'american-bulldog', 'alaskan-malamute']);

INSERT INTO liked_dogs
  VALUES (1, 1, ARRAY [52614551, 53121532, 50787225]),
         (2, 2, ARRAY [53296707, 53237860, 51231093]);