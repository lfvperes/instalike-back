import getAllPosts from "../models/postsModel.js";

export async function listAllPosts(req, res) {
    // Retrieve all posts using the getAllPosts function
    const posts = await getAllPosts();

    // Send the retrieved posts as a JSON response with a 200 status code
    res.status(200).json(posts);
}