import {Router} from "express";
import { CartManager } from "../managers/CartManager.js";

const path = "carts.json";
const router = Router();
const cartsManager = new CartManager(path);

router.get("/", async(req, res) => {
    res.send({
        status: "succes",
        message:"Ruta GET CART"
    })
})

router.get('/:cid', async (req,res)=> {
    const cid = req.params.cid;

    res.send({
        status: "succes",
        message:`Ruta GET ID CART con ID: ${cid}`
    })
})

router.post('/', async (req,res)=>{
    res.send({
        status: "succes",
        message:"Ruta POST CART"
    })
})

router.post('/:cid/product/:pid', async (req,res)=>{
    const cid = req.params.cid;
    const pid = req.params.pid;
    res.send({
        status: "succes",
        message:`Ruta POST CART: Se agregó producto al carrito. PID: ${pid} CID: ${cid}`
    })
})

router.put('/:cid', async (req,res)=>{
    const cid = req.params.cid;
    res.send({
        status: "succes",
        message:`Ruta PUT de CART con ID: ${cid}`
    })
})

router.delete('/:cid', async (req,res)=> {
    const cid = req.params.cid;
    res.send({
        status: "success",
        message:`Ruta DELETE de CART con ID: ${cid}`
    })
})

export {router as cartRouter};