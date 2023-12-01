import fs from 'fs';
import path from 'path';
import { __dirname } from '../utils.js';

class CartManager {
    constructor(path){
        this.cart = [];
        this.path = path.join(__dirname, `/Files/${path}`);
        this.id =1
    }

    getCarts = async () => {
        try {
            if(fs.existsSync(this.path)){
                const data = await fs.promises.readFile(this.path, 'utf-8')
                await fs.promises.writeFile(this.path, JSON.stringify(this.cart, '\t'));
                const cart = JSON.parse(data);
                return cart
            }else {
                return [];
            }
          
        } catch (error) {
            console.log('Error:', error);
            
        }
    }

    getCartById = async (idCart) => {
        const carts = await this.getCarts();
        const cart = carts.find(cart => cart.id === idCart);
        if (cart) {
            return carts;
        } else {
            return 'Not found';
        }
    
    }

    addCart = async () => {
        const newCart = {
            id: newId++,
            arrayProducts: []
        }

        this.cart.push(newCart);

        const data = JSON.stringify(this.carts, null, '\t');
        await fs.promises.writeFile(this.path, data);
        return this.carts;

}        
            
}

export default CartManager;