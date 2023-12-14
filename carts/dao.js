import model from "./model.js";

export const findCartByUserId = (userId) => model.find({user: userId});
export const deletsOneCartByUserId = (userId, itemId) => 
    model.deleteOne({user: userId, itemId: itemId});
export const addOneCartByUserId = (user, itemId, username, itemname, price) =>
    model.create({user, itemId, username, itemname, price});
export const deleteAllCartByUserId = (userId) => model.deleteMany({user: userId});
export const totalPrices = (userId) => 
    model.aggregate([
        {$match: {user: userId}},
        {$group: {_id: null, total: {$sum: "$price"}}}
    ]);