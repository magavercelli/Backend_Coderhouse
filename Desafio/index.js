import ProductManager from "./managers/ProductManager.js";

const manager = new ProductManager('./Files/productos.json');

const enviar = async () => {
    try {
        const prod = await manager.getProducts();
        console.log(prod);

        const product1 = {
            title: 'Producto 1',
            description: 'Descripcion del producto uno',
            price: 500,
            thumbnail: 'sin imagen',
            code: 'abc123',
            stock: 50
        }

        await manager.addProduct(
            product1.title,
            product1.description,
            product1.price,
            product1.thumbnail,
            product1.code,
            product1.stock
        );

        const product2 = {
            title: 'Producto 2',
            description: 'Descripcion del producto dos',
            price: 700,
            thumbnail: 'sin imagen',
            code: 'dfe456',
            stock: 25

        }

        await manager.addProduct(
            product2.title,
            product2.description,
            product2.price,
            product2.thumbnail,
            product2.code,
            product2.stock
        )

        const actualizarProducto = await manager.getProducts();
        console.log('Productos actualizados:', actualizarProducto);

        const productId = 2; 
        const productById = await manager.getProductById(productId);
        console.log('Producto por ID:', productById);

        const updatedProductId = 2; 
        const updatedProduct = {
            price: 800,
            
        };
        
        const updatedProductResult = await manager.updateProduct(updatedProductId, updatedProduct);
        console.log('Producto actualizado:', updatedProductResult);

        const deletedProductId = 1; 
        const deletedProduct = await manager.deleteProduct(deletedProductId);
        console.log('Producto eliminado:', deletedProduct);
        
    } catch (error) {
        console.log(error);
        
    }
}

enviar()