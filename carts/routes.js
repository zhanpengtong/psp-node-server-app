import * as dao from './dao.js';

function CartRoutes(app) {

    const findCartByUserId = async (req, res) => {
        const userId = req.params.id;
        const cart = await dao.findCartByUserId(userId);
        res.json(cart);
    }

    const deleteOneCartByUserId = async (req, res) => {
        const userId = req.params.userId;
        const itemId = req.params.itemId;
        const status = await dao.deletsOneCartByUserId(userId, itemId);
        res.json(status);
    }

    const addOneCartByUserId = async (req, res) => {
        const userId = req.params.userId;
        const itemId = req.params.itemId;
        const username = req.params.username;
        const itemname = req.params.itemname;
        const price = req.params.price;
        const status = await dao.addOneCartByUserId(userId, itemId, username, itemname, price);
        res.json(status);
    }

    const deleteAllCartByUserId = async (req, res) => {
        const userId = req.params.userId;
        const status = await dao.deleteAllCartByUserId(userId);
        res.json(status);
    }
    
    const totalPrices = async (req, res) => {
        const userId = req.params.userId;
        const status = await dao.totalPrices(userId);
        res.json(status);
    }

    app.get('/api/carts/userid/:id', findCartByUserId);
    app.delete('/api/carts/delete/:userId/:itemId', deleteOneCartByUserId);
    app.get('/api/carts/add/:userId/:itemId/:username/:itemname/:price', addOneCartByUserId);
    app.delete('/api/carts/deleteall/:userId', deleteAllCartByUserId);
    app.get('/api/carts/total/:userId', totalPrices);
}
export default CartRoutes;