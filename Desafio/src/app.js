import ProductManager from './managers/ProductManager.js';

import express from 'express';


const manager = new ProductManager('./Files/productos.json');

const PORT = 8080;
const app = express();

app.use(express.urlencoded({extended:true}))

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);

})

app.get('/', (req, res) => {
    res.send(`<h1> Bienvenidos a Productos ramdon </h1>`)

})
app.get('/productos', async (req, res) => {

    const productos = await manager.getProducts();
    const limit = req.query.limit

    const productosFilter = productos.slice(0, limit)
    if(!productosFilter){
        return res.json ({productos})
    }
    res.json(productosFilter);
})

app.get('/productos/:pid', async (req, res) => {
  
    const productId = 4; 
        const productById = await manager.getProductById(productId);
        console.log('Producto por ID:', productById);
res.json(productById);
    
    
})



