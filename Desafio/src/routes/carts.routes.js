import {Router} from "express";
import {CartManager} from "../managers/CartManager.js";
import {ProductManager} from "../managers/ProductManager.js";

const path = 'carts.json';
const router = Router();
const manager = new CartManager(path);
const productManager = new ProductManager(path);

router.get('/:cid', async (req,res)=>{
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
        messenger: `se ha creado un nuevo carrito ${newcart}`
    })
})

router.post('/:cid/product/:pid', async (req,res)=>{
    const { cid, pid } = req.params;

    const cart = await manager.getCartById(cid);

    if (!cart) {
        return res.json({ 
            status: 'error',
            message: 'Carrito no encontrado' });
    }

    const product = await productManager.getProductById(pid);

    if (!product) {
        return res.json({ 
            status: 'error',
            message: 'Producto no encontrado' });
    }

    cart.arrayProducts.push({
        product: pid,  
        quantity: 1    
    });

    await manager.updateCart(cart);

    res.json({ 
        status: 'success', 
        message: 'Producto agregado al carrito' });


})

export {router as cartRouter};