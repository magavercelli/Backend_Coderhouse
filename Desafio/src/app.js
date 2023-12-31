import express from 'express';
import { productRouter } from './routes/products.routes.js';
import { cartRouter } from './routes/carts.routes.js';


const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);

})


// app.get('/products', async (req, res) => {

//     const productos = await manager.getProducts();
//     const limit = req.query.limit

//     const productosFilter = productos.slice(0, limit)
//     if(!productosFilter){
//         return res.json ({productos})
//     }
//     res.json(productosFilter);
// })

// app.get('/products/:pid', async (req, res) => {
  
//     const productId = 4; 
//         const productById = await manager.getProductById(productId);
//         console.log('Producto por ID:', productById);
// res.json(productById);
    
    
// })



