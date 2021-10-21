/** Routes for users of pg-intro-demo. */

const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");

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

router.get('/:id/liked_dogs', async (req, res, next) => {
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

module.exports = router;