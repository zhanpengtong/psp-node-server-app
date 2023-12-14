import * as dao from "./dao.js";

let currentUser = null;

function UserRoutes(app) {
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const findUserById = async (req, res) => {
    const id = req.params.id;
    const user = await dao.findUserById(id);
    res.json(user);
  };
  const findByUsername = async (req, res) => {
    const username = req.params.username;
    const user = await dao.findUserByUsername(username);
    res.json(user);
  };
  const findUserByCredentials = async (req, res) => {
    const { username, password } = req.params;
    const user = await dao.findUserByCredentials(username, password);
    res.json(user);
  };

  const findUsersByRole = async (req, res) => {
    const role = req.params.role;
    const users = await dao.findUsersByRole(role);
    res.json(users);
  };

  const createUser = async (req, res) => {
    const { firstName, lastName, username, password, email, phoneNumber, role } = req.params;
    const newUser = {
      firstName,
      lastName,
      username,
      password,
      email,
      phoneNumber,
      role,
    };
    const user = await dao.createUser(newUser);
    res.json(await dao.createUser(user));
  };

  const updateUser = async (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    const status = await dao.updateUser(id, newUser);
    req.session['currentUser'] = await dao.findUserById(id);
    res.json(status);
  };
  const deleteUser = async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteUser(id);
    res.json(status);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await dao.findUserByCredentials(username, password);
    if (user) {
      currentUser = user;
      res.json(user);
    } else {
      res.sendStatus(403);
    }
  };
  const signout = async (req, res) => {
    currentUser = null;
    req.session.destroy();
    res.sendStatus(200);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(
      req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
        return;
    }
    currentUser = await dao.createUser(req.body);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  };
  const account = async (req, res) => {
    if (!currentUser) {
      res.sendStatus(403);
      return;
    }
    res.json(currentUser);
  };
  const findCartItems = async (req, res) => {
    const id = req.params.id;
    const cartItem = await dao.findCartItems(id);
    res.json(cartItem);
  }
  const findSellerItems = async (req, res) => {
    const id = req.params.id;
    const sellerItem = await dao.findSellerItems(id);
    res.json(sellerItem);
  }
  const addToCart = async (req, res) => {
    const id = req.params.id;
    const itemId = req.params.itemId;
    const status = await dao.addToCart(id, itemId);
    res.json(status);
  }
  const removeFromCart = async (req, res) => {
    const id = req.params.id;
    const itemId = req.params.itemId;
    const status = await dao.removeFromCart(id, itemId);
    res.json(status);
  }
  const addToSeller = async (req, res) => {
    const id = req.params.id;
    const itemId = req.params.itemId;
    const status = await dao.addToSeller(id, itemId);
    res.json(status);
  }
  const removeFromSeller = async (req, res) => {
    const id = req.params.id;
    const itemId = req.params.itemId;
    const status = await dao.removeFromSeller(id, itemId);
    res.json(status);
  }
  const clearCart = async (req, res) => {
    const id = req.params.id;
    const status = await dao.clearCart(id);
    res.json(status);
  }
  const clearSeller = async (req, res) => {
    const id = req.params.id;
    const status = await dao.clearSeller(id);
    res.json(status);
  }


  app.post("/api/users/signout", signout);
  app.post("/api/users/signin", signin);
  app.post("/api/users/account", account);
  app.post("/api/users/signup", signup);

  app.delete("/api/users/delete/:id", deleteUser);
  app.get("/api/users/creat/:firstName/:lastName/:username/:password/:email/:phoneNumber/:role", createUser);
  app.get("/api/users/role/:role", findUsersByRole);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:id", findUserById);
  app.get("/api/users/username/:username", findByUsername);
  app.get("/api/users/credentials/:username/:password", findUserByCredentials);
  app.put("/api/users/:id", updateUser);
  app.get("/api/users/cart/:id", findCartItems);
  app.get("/api/users/seller/:id", findSellerItems);
  app.put("/api/users/addcart/:id/:itemId", addToCart);
  app.put("/api/users/removecart/:id/:itemId", removeFromCart);
  app.put("/api/users/addseller/:id/:itemId", addToSeller);
  app.put("/api/users/removeseller/:id/:itemId", removeFromSeller);
  app.put("/api/users/clearcart/:id", clearCart);
  app.put("/api/users/clearseller/:id", clearSeller);
}

export default UserRoutes;