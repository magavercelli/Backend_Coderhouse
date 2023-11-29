import {Router} from "express";
import {ProductManager} from "../managers/ProductManager.js";

const path = "products.json";
const router = Router();
const productManager = new ProductManager(path);

router.get("/", async(req, res) => {

    const products =  await productManager.getProducts();
    res.send({
        status: "succes",
        productos: products
    })
})

router.get('/:pid', async (req,res)=> {
    res.send({
        status: "succes",
        message:"Ruta GET ID PRODUCTS"
    })
})

router.post('/', async (req,res)=>{

    const product = req.body; 
    const products = await productManager.addProducts(products);

    res.send({
        status: "succes",
        message:"Producto agregado",
        productos: products
    })
})

router.put('/:pid', async (req,res)=>{
    const pid = req.params.pid;
    res.send({
        status: "succes",
        message:`Ruta PUT de PRODUCTS con ID: ${pid} PRODUCTS`
    })
})

router.delete('/:pid', async (req,res)=> {
    const pid = req.params.pid;
    res.send({
        status: "success",
        message:`Ruta DELETE de PRODUCTS con ID: ${pid}`
    })
})

export {router as productRouter};