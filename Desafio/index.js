import ProductManager from "./src/managers/ProductManager.js";

const manager = new ProductManager('./Files/products.json');

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

        const product3 = {
            title: 'Producto 3',
            description: 'Descripcion del producto tres',
            price: 400,
            thumbnail: 'sin imagen',
            code: 'ghi789',
            stock: 35
        }

        await manager.addProduct(
            product3.title,
            product3.description,
            product3.price,
            product3.thumbnail,
            product3.code,
            product3.stock
        )

        
        const product4 = {
            title: 'Producto 4',
            description: 'Descripcion del producto cuatro',
            price: 800,
            thumbnail: 'sin imagen',
            code: 'jkl123',
            stock: 25
        }

        await manager.addProduct(
            product4.title,
            product4.description,
            product4.price,
            product4.thumbnail,
            product4.code,
            product4.stock
        )

        const product5 = {
            title: 'Producto 5',
            description: 'Descripcion del producto cinco',
            price: 700,
            thumbnail: 'sin imagen',
            code: 'mno456',
            stock: 30
        }

        await manager.addProduct(
            product5.title,
            product5.description,
            product5.price,
            product5.thumbnail,
            product5.code,
            product5.stock
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