import {Router} from "express";
import { ProductManager } from "../managers/ProductManager.js";

const path = 'products.json';
const router = Router();
const productManager = new ProductManager(path);

router.get('/', async (req,res)=>{

    const limit = req.query.limit
    const products = await productManager.getProducts();

    if(limit){
        const productosFilter = products.slice(0, limit)
        return res.json(productosFilter);
    }
    return res.json(products);
    
})

router.get('/:pid', async (req,res)=>{

    const productId = req.params.pid; 
    const productById = await productManager.getProductById(productId);
    res.json(productById);

})

router.post('/', async (req,res)=>{
    const { title, description, price, thumbnail, code, stock, status = true, category } = req.body;
    const [foto1, foto2] = thumbnail;

    const addPro = await productManager.addProduct(title, description, price, [foto1, foto2], code, stock, status, category);
    res.json(addPro);
    
})

router.put('/:pid', async (req,res)=>{
    const productId = req.params.pid 

    const {title, description, price, thumbnail: [foto1, foto2], code, stock, status = true, category} = req.body; // modificar
    const updatedProduct = await productManager.updateProduct(productId, {title, description, price, thumbnail: [foto1, foto2], code, stock, status, category})
    res.json (updatedProduct);
   
})

router.delete('/:pid', async (req,res)=>{
    const productId = req.params.pid;
    await productManager.deleteProduct(productId);
    res.json({productId});

})

export {router as productRouter};