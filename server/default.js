import {products} from "./constants/data.js"
import Product from "./model/product-schema.js"
const DefaultData=async()=>
{
    try {
        
        await Product.insertMany(products);
        console.log("Data Inserted Successfully")
        
    } catch (error) {
        console.log("Error While Inserting Default Data: ",error.message)
    }
}

export default DefaultData;