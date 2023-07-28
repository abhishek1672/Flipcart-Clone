import mongoose from "mongoose";

export const Connection=async(username,password)=>{

    const URL =`mongodb://${username}:${password}@ac-giu2kzw-shard-00-00.hw2td7o.mongodb.net:27017,ac-giu2kzw-shard-00-01.hw2td7o.mongodb.net:27017,ac-giu2kzw-shard-00-02.hw2td7o.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-tcue2e-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
           await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
           console.log("Database Connected Successfully...")
    }
    catch(error)
    {
        console.log("Error While connecting to database",error.message);
    }
}

export default Connection;