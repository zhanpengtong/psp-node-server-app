import * as dao from "./dao.js";

function ReviewRoutes(app) {
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };

    const findReviewByUserId = async (req, res) => {
        const userId = req.params.id;
        const review = await dao.findReviewByUserId(userId);
        res.json(review);
    }

    const findReviewByItemId = async (req, res) => {
        const itemId = req.params.itemId;
        const review = await dao.findReviewByItemId(itemId);
        res.json(review);
    }

    const createReviewItem = async (req, res) => {
        const users = req.params.users;
        const itemId = req.params.itemId;
        const review = req.params.review;
        const username = req.params.username;
        const itemname = req.params.itemname;
        const status = await dao.createReviewItem(users, itemId, review, username, itemname);
        res.json(status);
    }

    const deleteReviewItem = async (req, res) => {
        const userId = req.params.userId;
        const itemId = req.params.itemId;
        const status = await dao.deleteReviewItem(userId, itemId);
        res.json(status);
    }

    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/userid/:id", findReviewByUserId);
    app.get("/api/reviews/itemid/:itemId", findReviewByItemId);
    app.get("/api/reviews/create/:users/:itemId/:review/:username/:itemname", createReviewItem);
    app.delete("/api/reviews/delete/:userId/:itemId", deleteReviewItem);

};
export default ReviewRoutes;