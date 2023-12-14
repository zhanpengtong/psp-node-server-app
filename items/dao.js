import model from "./model.js";

export const findItemByName = (itemName) => 
    model.find({itemName: itemName});
export const findItemByCategory = (category) => 
    model.find({category: category});
export const findAllItem = () => model.find();
export const findItemById = (id) => model.findById(id);
export const createItem = (item) => model.create(item);
export const updateItem = (id, item) =>
  model.updateOne({ _id: id }, { $set: item });
export const deleteItem = (id) => model.deleteOne({ _id: id });