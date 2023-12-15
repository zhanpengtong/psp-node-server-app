import model from "./model.js";

export const findItemByName = (itemName) => 
    model.find({itemName: itemName});
export const findItemByCategory = (category) => 
    model.find({category: category});
export const findAllItem = () => model.find();
export const findItemById = (id) => model.findById(id);
export const createItem = (item) => model.create(item);
export const deleteItem = (id) => model.deleteOne({ _id: id });
export const searchItem = (matchAny) =>
  model.find({itemName: { $regex: matchAny, $options: "i" } });
export const findItemBySellerId = (sellerId) => model.find({seller: sellerId});
export const updateItem = (id, itemName, Price, description, category) => 
    model.updateOne({_id: id}, {$set: {itemName, Price, description, category}});