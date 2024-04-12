// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer'


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

        const newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            email: data.email,
        }

        //Connect to MongoDB
        const client = await MongoClient.connect(mongoUri);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const alreadyAvaliable = await collection.countDocuments({ email: newUser.email });

        if (alreadyAvaliable !== 0) {
            res.status(400).json({ message: "this email already exists" });
            return
        }

        const result = await collection.insertOne(newUser);


        if (result.insertedId) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "javadyousefi9000@gmail.com",
                    pass: "tuftbykimnzuimqa"
                }
            })

            const mailOption = {
                from: "javadyousefi9000@gmail.com",
                to: newUser.email,
                subject: "welcome to Javad.blog",
                text: `welcome to our website dear "${newUser.firstName}" 🥳\nwe will send you the latest news from programming world\nGood luck`
            }

            transporter.sendMail(mailOption)
            res.status(200).json({ message: "user register succsesfully", data: { ...data, _id: result.insertedId } });
        } else {
            res.status(400).json({ message: "fail to insert db" });
        }

        client.close()

    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}