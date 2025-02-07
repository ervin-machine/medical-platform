CREATE TABLE users (

    id int PRIMARY KEY AUTO_INCREMENT,
    username varchar(255),
    password varchar(255),
    position varchar(255),
    jmbg varchar(255),
    token varchar(255)
);



CREATE TABLE patients (

    id int PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    father_name varchar(255),
    jmbg varchar(255),
    phone_number varchar(255),
    adress varchar(255),
    birth varchar(255),
    profession varchar(255)
);


CREATE TABLE diagnosis (

    id int PRIMARY KEY AUTO_INCREMENT,
    jmbg varchar(255),
    dg_name varchar(255),
    dg_desc varchar(255),
    dg_date DATE,
    doctor varchar(255)
);

CREATE TABLE appointment (

    id int PRIMARY KEY AUTO_INCREMENT,
    jmbg varchar(255),
    dateSc varchar(255)
);




INSERT INTO patients (first_name, last_name, father_name, jmbg, phone_number, adress, birth, profession) 
VALUES ("Salko", "Hajric", "Enes", "1", "0012332112", "Tuzla bb", "7/11/1999", "Nurse");

INSERT INTO patients (first_name, last_name, father_name, jmbg, phone_number, adress, birth, profession) 
VALUES ("David", "Johnson", "Adam", "2", "0012332112", "New York City bb", "1/12/1989", "Teacher");