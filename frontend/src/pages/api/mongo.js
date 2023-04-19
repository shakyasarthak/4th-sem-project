
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