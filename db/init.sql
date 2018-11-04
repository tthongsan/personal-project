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
