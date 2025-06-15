import { MongoClient } from 'mongodb';

const mongoUri =
    process.env.mongoURI ||
    'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.2';

export const client = new MongoClient(mongoUri);

export async function runDb() {
    try {
        await client.connect();
        await client.db('products').command({ ping: 1 });
        console.log('Connected successfully to mongo server');
    } catch {
        console.log("Can't connect to db");
        await client.close();
    }
}
