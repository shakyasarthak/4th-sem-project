
import nextConnect from 'next-connect';
import middleware from './mongo';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('login').findOne()
    //console.log(doc);
    res.json(doc);
});

export default handler;