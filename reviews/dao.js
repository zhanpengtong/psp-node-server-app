import model from "./model.js";

export const findAllReviews = () => model.find();

export const createReviewItem = (user, itemId, review, username, itemname) => 
    model.create({user: user,itemId: itemId, review: review, username: username, itemname: itemname});

export const deleteReviewItem = (userId, itemId) =>
    model.deleteOne({user: userId, itemId: itemId});

export const findReviewByItemId = (itemId) => model.find({itemId: itemId});

export const findReviewByUserId = (userId) => model.find({user: userId});