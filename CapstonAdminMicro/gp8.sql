create database gp8;
SELECT * FROM gp8.user;
SELECT * FROM gp8.admin;
SELECT * FROM gp8.products;
use gp8;
insert into user(email,name,password,phone,super_coins,user_type) values("uuu","shiva","uuu","999",0,"customer");
insert into products (id,category,name,price,quantity) values(7,"vegetables","cabbage",67,15);