//const mongoClient = require('./config/default')
//const mongoose = require('mongoose')
// import mongoose, {mongo} from "mongoose";
// // MongoDB

// mongoose.connect(
//   `mongodb+srv://shakyasarthak:12345@users.n9c1vxh.mongodb.net/test`
// )

// // Test connection
// mongoose.connection.once('open', function () {
//   console.log('MongoDB database connection established successfully')
// })



// const connectDB = async () => {
//     if(mongoose.connections.readyState >=1) return;
       
//     mongoose.connect(process.env.DB_URI);
    
// };

// export default connectDB;//ClientSession

import { MongoClient } from "mongodb";

const URI = 'mongodb+srv://shakyasarthak:12345@users.n9c1vxh.mongodb.net/?retryWrites=true&w=majority'

const options ={}

if(!URI) throw new Error("No URI found");

let client = new MongoClient(URI, options)
let clientPromise 

if(process.env.NODE_ENV === "production"){
    if(!global._mongoClient){
        global._mongoClient = client.connect()
        console.log("Connected to MongoDB");
    }

    clientPromise = global._mongoClientPromise
}else{
    clientPromise = client.connect()
}

export default clientPromise
  
