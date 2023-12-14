import model from "./model.js";

export const findAllUsers = () => model.find();
export const findUserById = (id) => model.findById(id);    //model.find({ _id: id });
export const findUserByUsername = (username) => 
    model.findOne({username: username});
    //model.find({username: username});
export const findUserByCredentials = (username, password) => 
    model.findOne({username, password});
export const findUserByRole = (role) => model.find({role: role});
export const createUser = (user) => model.create(user);
export const updateUser = (id, user) => 
    model.updateOne({_id: id}, {$set: user});
export const deleteUser = (id) => 
    model.deleteOne({_id: id});
export const findCartItems = async (id) => {
    const result = await model.findById(id).select("cartItem");
    return result ? result.cartItem : [];
    };
      
export const findSellerItems = (id) =>
    model.findById(id).select("sellerItem");
export const addToCart = (id, itemId) =>
    model.updateOne({_id: id}, {$push: {cartItem: itemId}});
export const removeFromCart = (id, itemId) =>
    model.updateOne({_id: id}, {$pull: {cartItem: itemId}});
export const addToSeller = (id, itemId) =>
    model.updateOne({_id: id}, {$push: {sellerItem: itemId}});
export const removeFromSeller = (id, itemId) =>
    model.updateOne({_id: id}, {$pull: {sellerItem: itemId}});
export const clearCart = (id) =>
    model.updateOne({_id: id}, {$set: {cartItem: []}});
export const clearSeller = (id) =>
    model.updateOne({_id: id}, {$set: {sellerItem: []}});
