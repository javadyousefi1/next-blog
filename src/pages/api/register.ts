// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type ResponseData = {
    message: string;
    data?: any
};

const mongoUri = 'mongodb://admin:xHFrwVqZyiwkn4THS93f@remote-asiatech.runflare.com:32515/admin';
const dbName = 'next-blog';
const collectionName = 'users';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const data = req.body;

        //Connect to MongoDB
        const client = await MongoClient.connect(mongoUri);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const alreadyAvaliable = await collection.countDocuments({ email: data.email });

        if (alreadyAvaliable !== 0) {
            res.status(400).json({ message: "this email already exists" });
            return
        }

        const result = await collection.insertOne(data);

        if (result.insertedId) {
            res.status(200).json({ message: "user register succsesfully", data: { ...data, _id: result.insertedId } });
        } else {
            res.status(400).json({ message: "fail to insert db" });
        }

    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}