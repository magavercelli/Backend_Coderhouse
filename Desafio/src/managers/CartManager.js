import fs from "fs";
import path from "path";
import __dirname from "../utils.js";

class CartManager {
    constructor(path){
        this.path = path.join(__dirname, `/Files/ ${path}`);

    }
    
}

export {CartManager};