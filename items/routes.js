import * as dao from "./dao.js";

function ItemRoutes(app) {
  const findItemByName = async (req, res) => {
    const itemName = req.params.itemName;
    const item = await dao.findItemByName(itemName);
    res.json(item);
  }

  const findItemByCategory = async (req, res) => {
    const category = req.params.category;
    const item = await dao.findItemByCategory(category);
    res.json(item);
  }

  const findAllItem = async (req, res) => {
    const items = await dao.findAllItem();
    res.json(items);
  }

  const findItemById = async (req, res) => {
    const id = req.params.id;
    const item = await dao.findItemById(id);
    res.json(item);
  }

  const createItem = async (req, res) => {
    const { userId, itemName, Price, description, category } = req.params;
    const newItem = {
      seller: userId,
      itemName,
      Price,
      description,
      category,
    };
    const item = await dao.createItem(newItem);
    res.json(await dao.createItem(item));
  }

  const updateItem = async (req, res) => {
    const id = req.params.id;
    const itemName = req.params.itemName;
    const Price = req.params.Price;
    const description = req.params.description;
    const category = req.params.category;
    const item = await dao.updateItem(id, itemName, Price, description, category);
    res.json(item);
  }

  const deleteItem = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteItem(id);
    res.json(status);
  }
  const searchItem = async (req, res) => {
    const matchAny = req.params.matchAny;
    const item = await dao.searchItem(matchAny);
    res.json(item);
  }

  const findItemBySellerId = async (req, res) => {
    const sellerId = req.params.sellerId;
    const item = await dao.findItemBySellerId(sellerId);
    res.json(item);
  }

  app.get("/api/items/findbyname/:itemName", findItemByName);
  app.get("/api/items/category/:category", findItemByCategory);
  app.get("/api/items", findAllItem);
  app.get("/api/items/:id", findItemById);
  app.post("/api/items/create/:userId/:itemName/:Price/:description/:category", createItem);
  app.put("/api/items/update/:id/:itemName/:Price/:description/:category", updateItem);
  app.delete("/api/items/delete/:id", deleteItem);
  app.get("/api/items/search/:matchAny", searchItem);
  app.get("/api/items/seller/:sellerId", findItemBySellerId);
}

export default ItemRoutes;