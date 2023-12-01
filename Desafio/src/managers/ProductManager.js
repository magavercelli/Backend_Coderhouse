import fs from 'fs';
import path from 'path';
import __dirname from '../utils.js';

class ProductManager {
    constructor(pathFile) {
        this.products = [];
        this.path = path.join(__dirname, `/Files/${pathFile}`);
        this.id = 1;

}

getProducts = async () => {
    try {
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path, 'utf-8')
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, '\t'));
            const product = JSON.parse(data);
            return product
        }else {
            return [];
        }
      
    } catch (error) {
        console.log('Error:', error);
        
    }
}

addProduct = async (title, description, price, thumbnail, code, stock, status, category) => {

    let newProduct = {
        id: this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        status,
        category
    };

    this.products.push(newProduct);
    this.id++; // Incrementar el ID para el próximo producto

    this.products.push(newProduct);

    const data = JSON.stringify(this.products, null, '\t');
    await fs.promises.writeFile(this.path, data);
    return this.products;
}

getProductById = async (idProduct) => {
    const products = await this.getProducts();
    const product = products.find(product => product.id === idProduct);
    if (product) {
        return product;
    } else {
        return 'Not found';
    }

}

updateProduct = async (id, updatedProduct) => {
    const products = await this.getProducts();
    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
        
        products[index] = { ...products[index], ...updatedProduct };

        
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

        return products[index];
    } else {
        return 'Product not found';
    }
}

deleteProduct = async (idProduct) => {
    const products = await this.getProducts();
    const index = products.findIndex(product => product.id === idProduct);

    if (index !== -1) {
        
        const deletedProduct = products.splice(index, 1)[0];

     
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

        return deletedProduct;
    } else {
        return 'Product not found';
    }
}


}
    
export {ProductManager};
