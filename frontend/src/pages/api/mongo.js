// import mongoose from 'mongoose';

// const connectDB = async () => mongoose.connect("mongodb://localhost:27017/student"); // mongodb://localhost:27017/student is the connection string

// export default connectDB;

import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  req.dbClient = client;
  req.db = client.db('student');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;