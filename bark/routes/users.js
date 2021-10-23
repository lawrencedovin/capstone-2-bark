/** Routes for users of pg-intro-demo. */

const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");

/** GET / - returns all users with their favorite breeds and liked dogs `{users: [...]}` */
router.get("/", async (req, res, next) => {
    try {
        const results = await db.query(`
            SELECT u.id as id, u.username as username, u.email as email, u.zipcode as zipcode, 
            b.breeds as breeds, 
            d.dogs as dogs
            FROM users u
            JOIN favorite_breeds b
                ON b.user_id = u.id
            JOIN liked_dogs d
                ON d.user_id = u.id`
        );
        return res.json({users: results.rows});
    }
    catch(e) {
        return next(e);
    }
});

/** GET / - returns a user by their id with their favorite breeds and liked dogs `{user: [...]}` */
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.query(
            `SELECT u.id as id, u.username as username, u.email as email, u.zipcode as zipcode, 
            b.breeds as breeds, 
            d.dogs as dogs
            FROM users u
            JOIN favorite_breeds b
                ON b.user_id = u.id
            JOIN liked_dogs d
                ON d.user_id = u.id 
            WHERE u.id=$1`,
            [id]
        );
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find user with id of ${id}`, 404);
        }
        return res.json({user: results.rows[0]});
    }
    catch(e) {
        return next(e);
    }
});

/** GET / - returns a user by their id with their liked dogs `{user: [...]}` */
router.get('/:id/liked-dogs', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.query(
            `SELECT u.username as username,
            d.dogs as dogs
            FROM users u
            JOIN liked_dogs d
                ON d.user_id = u.id 
            WHERE u.id=$1`,
            [id]
        );
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find user with id of ${id}`, 404);
        }
        return res.json({user: results.rows[0]});
    }
    catch(e) {
        return next(e);
    }
});

/** GET / - returns a user by their id with their favorite breeds `{user: [...]}` */
router.get('/:id/favorite-breeds', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.query(
            `SELECT u.username as username,
            b.breeds as breeds
            FROM users u
            JOIN favorite_breeds b
                ON b.user_id = u.id 
            WHERE u.id=$1`,
            [id]
        );
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find user with id of ${id}`, 404);
        }
        return res.json({user: results.rows[0]});
    }
    catch(e) {
        return next(e);
    }
});

/** POST / - create user from data; return `{user: user}` */

router.post("/", async function(req, res, next) {
    try {
        const user_results = await db.query(
            `INSERT INTO users (username, email, password, zipcode) 
                VALUES ($1, $2, $3, $4) 
                RETURNING id, username, email, password, zipcode`,
            [req.body.username, req.body.email, req.body.password, req.body.zipcode]
        );
        const user_id = user_results.rows[0].id

        const liked_dogs = await db.query (
            `INSERT INTO liked_dogs (user_id, dogs)
                VALUES ($1, $2)
                RETURNING id, user_id, dogs`,
            [user_id, []]
        );

        const favorite_breeds = await db.query (
            `INSERT INTO favorite_breeds (user_id, breeds)
                VALUES ($1, $2)
                RETURNING id, user_id, breeds`,
            [user_id, []]
        );

      return res.status(201).json({user: user_results.rows[0], dogs: liked_dogs.rows[0], breeds: favorite_breeds.rows[0]});  // 201 CREATED
    } catch (err) {
      return next(err);
    }
  });

  /** PATCH /[id] - update fields in user; return `{user: user}` */

router.patch("/:id", async function(req, res, next) {
    try {
      if ("id" in req.body) {
        throw new ExpressError("Not allowed", 400)
      }
  
      const result = await db.query(
        `UPDATE users 
             SET username=$1, email=$2, zipcode=$3
             WHERE id = $4
             RETURNING id, username, email, zipcode`,
        [req.body.username, req.body.email, req.body.zipcode, req.params.id]);
  
      if (result.rows.length === 0) {
        throw new ExpressError(`There is no user with id of '${req.params.id}`, 404);
      }
  
      return res.json({ user: result.rows[0]});
    } catch (err) {
      return next(err);
    }
  });

/** PATCH /[id] - Adds dog to user's liked dogs; return `{user: user}` */

router.patch("/:user_id/liked-dogs/:dog_id/add-dog", async function(req, res, next) {

    try {
      if ("user_id" in req.body || "dog_id" in req.body) {
        throw new ExpressError("Not allowed", 400)
      }
      
     const current_dogs = await db.query(
         `SELECT dogs 
          FROM liked_dogs 
          WHERE user_id = $1`,
          [req.params.user_id]
     )
    
      let new_dog = req.params.dog_id;
      // Adds new dog to list
      current_dogs.rows[0].dogs.push(new_dog);
      // Updated dog list with new dog id
      let updated_dogs = current_dogs.rows[0].dogs;

      const result = await db.query(
        `UPDATE liked_dogs 
             SET dogs = $1
             WHERE user_id = $2
             RETURNING user_id, dogs`,
        [updated_dogs, req.params.user_id]);
  
      if (result.rows.length === 0) {
        throw new ExpressError(`There is no user with id of '${req.params.user_id}`, 404);
      }
  
      return res.json({ user: result.rows[0]});
    } catch (err) {
      return next(err);
    }
  });
  

module.exports = router;