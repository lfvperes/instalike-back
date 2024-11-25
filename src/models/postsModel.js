import { ObjectId } from "mongodb";
import connectToDB from "../config/dbConfig.js";

// Connect to the MongoDB database using the connection string from the environment variable
const connection = await connectToDB(process.env.CONNECTION_STRING);

// Asynchronous function to retrieve all posts from the MongoDB database
export async function getAllPosts() {
    // Get the 'instalike' database
    const db = connection.db("instalike");

    // Get the 'posts' collection from the database
    const postCollection = db.collection("posts");

    // Find all posts in the collection and return them as an array
    return postCollection.find().toArray();
}

export async function createNewPost(newPost) {
    const db = connection.db("instalike");
    const postCollection = db.collection("posts");
    return postCollection.insertOne(newPost);
}

export async function updatePost(id, newPost) {
    const db = connection.db("instalike");
    const postCollection = db.collection("posts");
    const objectID = ObjectId.createFromHexString(id)
    return postCollection.updateOne({_id: new ObjectId(objectID)}, {$set: newPost});
}
