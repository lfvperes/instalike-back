import express from "express";
import connectToDB from "./src/config/dbConfig.js";

// Connect to the MongoDB database using the connection string from the environment variable
const connection = await connectToDB(process.env.CONNECTION_STRING);

// Create an Express application instance
const app = express();

// Enable JSON parsing for incoming requests
app.use(express.json());

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => {
    console.log("Server listening...");
});

// Asynchronous function to retrieve all posts from the MongoDB database
async function getAllPosts() {
    // Get the 'instalike' database
    const db = connection.db("instalike");

    // Get the 'posts' collection from the database
    const postCollection = db.collection("posts");

    // Find all posts in the collection and return them as an array
    return postCollection.find().toArray();
}

// Define a route handler for the '/posts' endpoint
app.get("/posts", async (req, res) => {
    // Retrieve all posts using the getAllPosts function
    const posts = await getAllPosts();

    // Send the retrieved posts as a JSON response with a 200 status code
    res.status(200).json(posts);
});


// function searchPostByID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = searchPostByID(req.params.id)
//     res.status(200).json(posts[index]);
// });