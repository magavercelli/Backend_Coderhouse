import {Router} from "express";
import {CartManager} from "../managers/CartManager.js";
import {ProductManager} from "../managers/ProductManager.js";

const path = 'carts.json';
const router = Router();
const manager = new CartManager(path);
const productManager = new ProductManager(path);

router.get('/:cid', async (req,res)=>{
    
    const cartId = req.params.cid; 
    const cartById = await manager.getCartById(cartId);
    res.json(cartById);

})

router.post('/', async (req,res)=>{

    await manager.getCarts();
    const newcart = {
        id: this.id++,
        arrayProducts: []
    }

    res.json(newcart);
})

router.post('/:cid/product/:pid', async (req,res)=>{
    const { cid, pid } = req.params;

    const cart = await manager.getCartById(cid);

    if (!cart) {
        return res.send({ 
            status: 'error',
            message: 'Carrito no encontrado' });
    }

    const product = await productManager.getProductById(pid);

    if (!product) {
        return res.send({ 
            status: 'error',
            message: 'Producto no encontrado' });
    }

    cart.arrayProducts.push({
        product: pid,  
        quantity: 1    
    });

    await manager.updateCart(cart);

    res.json(arrayProducts);

})

export {router as cartRouter};