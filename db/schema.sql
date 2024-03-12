CREATE TABLE guests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    will_attend VARCHAR(255) NOT NULL,
    number_of_people INT,
    car BOOLEAN NOT NULL
);
