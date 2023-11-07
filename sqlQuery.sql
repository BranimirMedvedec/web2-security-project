-- Create Users and Pets tables
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    address VARCHAR(255)
);

CREATE TABLE Pets (
    pet_id INT PRIMARY KEY,
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
    (1, 'John Smith', '123 Main Street, Anytown, USA'),
    (2, 'Sarah Johnson', '789 Oak Road, Another City, USA'),
    (3, 'Robert Lee', '333 Redwood Drive, Hometown, USA'),
    (4, 'Sophia Anderson', '444 Maple Street, Somecity, USA'),
    (5, 'Emma Martinez', '555 Birch Road, Everytown, USA');

-- Insert data into Pets table
INSERT INTO Pets (pet_id, name, species, breed, age, weight, user_id) VALUES
    (1, 'Max', 'Dog', 'Labrador', 4, 65, 1),
    (2, 'Bella', 'Cat', 'Siamese', 2, 9, 2),
    (3, 'Rocky', 'Dog', 'German Shepherd', 3, 80, 1),
    (4, 'Luna', 'Cat', 'Persian', 5, 12, 3),
    (5, 'Bailey', 'Dog', 'Golden Retriever', 1, 50, 4),
    (6, 'Simba', 'Cat', 'Maine Coon', 4, 15, 5),
    (7, 'Daisy', 'Dog', 'Beagle', 2, 25, 1),
    (8, 'Oliver', 'Cat', 'Ragdoll', 3, 14, 2),
    (9, 'Lucy', 'Dog', 'Poodle', 6, 10, 3),
    (10, 'Mia', 'Cat', 'Scottish Fold', 1, 8, 5),
    (11, 'Lola', 'Dog', 'Golden Retriever', 2, 55, 2),
    (12, 'Charlie', 'Cat', 'British Shorthair', 3, 11, 4),
    (13, 'Buddy', 'Dog', 'Border Collie', 5, 45, 5),
    (14, 'Lily', 'Cat', 'Maine Coon', 2, 14, 1),
    (15, 'Teddy', 'Dog', 'Pug', 1, 15, 2);
