import {Router} from "express";
import CartManager from "../managers/CartManager.js";
import ProductManager from "../managers/ProductManager.js";

const path = "carts.json";
const router = Router();
const manager = new CartManager(path);

router.get('/cid', async (req,res)=>{
    const carts = await manager.getCarts();
   
    const cartId = req.params; 
    const cartById = await carts.getCartById(cartId);
    res.json(cartById);

})

router.post('/', async (req,res)=>{
    const newcart = {
        id: this.id++,
        arrayProducts: []
    }

    res.send({
        status: "success",
        messenger: `se ha creado un nuevo carito ${newcart}`
    })
})

router.post('/:cid/product/:pid', async (req,res)=>{
    const productId = req.params; 
    const updatedProduct = await productId.updateProduct(productId)
    res.json (updatedProduct);

    const cartId = req.params;
    const updatedCart = await cartId.updateCart(cartIdtId)
    res.json (updatedCart);


})

export {router as cartRouter};