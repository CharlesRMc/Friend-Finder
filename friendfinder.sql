DROP DATABASE IF EXISTS friendfinder_db;
CREATE DATABASE friendfinder_db;
USE friendfinder_db;

CREATE TABLE friends (
    id INTEGER (11) AUTO_INCREMENT,
    person VARCHAR(100),
    picture VARCHAR(1000),
    q1 INTEGER(11),
    q2 INTEGER(11),
    q3 INTEGER(11),
    q4 INTEGER(11),
    q5 INTEGER(11),
    q6 INTEGER(11),
    q7 INTEGER(11),
    q8 INTEGER(11),
    q9 INTEGER(11),
    q10 INTEGER(11),
    PRIMARY KEY (id)
);
