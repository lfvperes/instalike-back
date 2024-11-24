import { MongoClient } from 'mongodb';

export default async function connectToDB(connectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString);
        console.log('Connecting to cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (err) {
        console.error('Failed to connect to database!', err);
        process.exit();
    }
}