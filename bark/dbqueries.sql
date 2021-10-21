-- Query for getting user with their respective Favorite Breeds.
SELECT b.breeds as breed, u.username as username
    FROM favorite_breeds b
    JOIN users u
        ON b.user_id = u.id;

-- Query for getting user with their respective Liked Dogs.
SELECT d.dogs as dog, u.username as username
    FROM liked_dogs d
    JOIN users u
        ON d.user_id = u.id;

----------------------------------------------------------------

-- Query for getting user details with their respective Favorite Breeds and Liked Dogs
SELECT u.username as username, u.email as email, u.zipcode as zipcode, b.breeds as breeds, d.dogs as dogs
    FROM users u
    JOIN favorite_breeds b
        ON b.user_id = u.id
    JOIN liked_dogs d
        ON d.user_id = u.id;