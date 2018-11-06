create table products (
    id serial primary key,
    user_id int references users (id),
    brand text not null,
    style text not null,
    name text not null,
    price int not null,
    image text not null
);

create table cart (
    id serial primary key,
    name text,
    price int,
    quantity int
);


create table users (
    id serial primary key,
    auth0_id text not null,
    email text not null,
    name text not null,
    picture text not null
);


////////bcrypt////////////

CREATE TABLE users_bcrypt (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password VARCHAR
);

INSERT INTO users_bcrypt (username, password) values ($1, $2);

SELECT * FROM users_bcrypt WHERE username = $1 LIMIT 1;