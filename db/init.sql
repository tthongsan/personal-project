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










//////////////////////everything nov 8 2018////////////////////

drop table if exists product;

create table users (
    id serial primary key,
    auth0_id text not null,
    email text not null,
    name text not null,
    picture text not null
);

select * from users;

create table products (
    id serial primary key,
    user_id int references users (id),
    brand text not null,
    style text not null,
    name text not null,
    price int not null,
    image text not null,
    details text 
);

drop table if exists cart;

create table cart (
    id serial primary key,
    name text,
    price int,
    quantity int
);

select * from cart;

alter table cart add quantity int;

insert into products ( brand, style, name, price, image) 
values ('nike', 'shoes', 'kobe 3', 180, 'https://www.sneakerfiles.com/wp-content/uploads/2007/12/nike-zoom-3-kobe-lakers.jpg');

insert into products ( brand, style, name, price, image) 
values ('nike', 'shoes', 'kobe x', 180, 'https://i0.wp.com/weartesters.com/wp-content/uploads/2015/02/Nike-Kobe-X-Blackout-Up-Close-Personal-1.jpg');

insert into products ( brand, style, name, price, image) 
values ('nike', 'shoes', 'kobe 7', 180, 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/nike-kobe-ftb-26_qzcokc.jpg');

insert into products ( brand, style, name, price, image) 
values ('nike', 'shoes', 'kobe 3', 180, 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/4/041621_01.jpg');

insert into products ( brand, style, name, price, image) 
values ('nike', 'shoes', 'kobe 3', 180, 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/4/041655_01.jpg');

insert into products ( brand, style, name, price, image, details) 
values ('adidas', 'shoes', 'ultra boosts', 180, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/437e8f48c764468f9cc9a85600f20066_9366/Ultraboost_Shoes_Green_BB6154_01_standard.jpg','These running shoes combine comfort and high-performance technology for a best-ever-run feeling. They have a stretchy knit upper that adapts to the changing shape of your foot as you run. Responsive midsole cushioning and a flexible outsole deliver a smooth and energized ride');

insert into products (brand, style, name, price, image)
values ('vans', 'shoes', 'old school', 50, 'https://images.vans.com/is/image/Vans/8G1P0S-HERO?$583x583$');

insert into products (brand, style, name, price, image, details)
values ('vans', 'shoes', 'checkerboard slip-on', 50, 'https://s7d9.scene7.com/is/image/zumiez/cat_max/Vans-Slip-On-Black-%26-White-Checkered-Skate-Shoes-_270934.jpg', 'Vans The Classic Slip-On has a low profile, slip-on canvas upper with all-over checker print, elastic side accents, Vans flag label and Vans original Waffle Outsole. - https://www.vans.com/shop/mens-shoes/checkerboard-slip-on-black-off-white-check#hero=0');

alter table products add quantity int;

select * from products where brand = 'adidas';
select * from products where brand = 'nike';

CREATE TABLE users_bcrypt (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password VARCHAR
);

select * from users_bcrypt;
insert into users_bcrypt (username, password)
values ('admin', 'pleaseworkxxx');

delete from users_bcrypt where id = 1;