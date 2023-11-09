DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Pets;

-- Create Users and Pets tables
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    address VARCHAR(255)
);

CREATE TABLE Pets (
    pet_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    species VARCHAR(255),
    breed VARCHAR(255),
    age INT,
    weight INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Insert data into Users table
INSERT INTO Users (user_id, username, address) VALUES
    ('John Smith', '123 Main Street, Anytown, USA'),
    ('Sarah Johnson', '789 Oak Road, Another City, USA'),
    ('Robert Lee', '333 Redwood Drive, Hometown, USA'),
    ('Sophia Anderson', '444 Maple Street, Somecity, USA'),
    ('Emma Martinez', '555 Birch Road, Everytown, USA');

-- Insert data into Pets table
INSERT INTO Pets (pet_id, name, species, breed, age, weight, user_id) VALUES
    ('Max', 'Dog', 'Labrador', 4, 65, 1),
    ('Bella', 'Cat', 'Siamese', 2, 9, 2),
    ('Rocky', 'Dog', 'German Shepherd', 3, 80, 1),
    ('Luna', 'Cat', 'Persian', 5, 12, 3),
    ('Bailey', 'Dog', 'Golden Retriever', 1, 50, 4),
    ('Simba', 'Cat', 'Maine Coon', 4, 15, 5),
    ('Daisy', 'Dog', 'Beagle', 2, 25, 1),
    ('Oliver', 'Cat', 'Ragdoll', 3, 14, 2),
    ('Lucy', 'Dog', 'Poodle', 6, 10, 3),
    ('Mia', 'Cat', 'Scottish Fold', 1, 8, 5),
    ('Lola', 'Dog', 'Golden Retriever', 2, 55, 2),
    ('Charlie', 'Cat', 'British Shorthair', 3, 11, 4),
    ('Buddy', 'Dog', 'Border Collie', 5, 45, 5),
    ('Lily', 'Cat', 'Maine Coon', 2, 14, 1),
    ('Teddy', 'Dog', 'Pug', 1, 15, 2);
