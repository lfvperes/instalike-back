import connectToDB from "../config/dbConfig.js";

// Connect to the MongoDB database using the connection string from the environment variable
const connection = await connectToDB(process.env.CONNECTION_STRING);

// Asynchronous function to retrieve all posts from the MongoDB database
export default async function getAllPosts() {
    // Get the 'instalike' database
    const db = connection.db("instalike");

    // Get the 'posts' collection from the database
    const postCollection = db.collection("posts");

    // Find all posts in the collection and return them as an array
    return postCollection.find().toArray();
}
