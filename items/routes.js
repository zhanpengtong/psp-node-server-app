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
    const { itemName, Price, description, category } = req.params;
    const newItem = {
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
    const newItem = req.body;
    const status = await dao.updateItem(id, newItem);
    res.json(status);
  }

  const deleteItem = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteItem(id);
    res.json(status);
  }

  app.get("/api/items/findbyname/:itemName", findItemByName);
  app.get("/api/items/category/:category", findItemByCategory);
  app.get("/api/items", findAllItem);
  app.get("/api/items/:id", findItemById);
  app.post("/api/items/create/:itemName/:Price/:description/:category", createItem);
  app.put("/api/items/update/:id", updateItem);
  app.delete("/api/delete/items/:id", deleteItem);
}

export default ItemRoutes;