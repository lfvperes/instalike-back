import { getAllPosts, createNewPost, updatePost} from "../models/postsModel.js";
import fs from "fs";

export async function listAllPosts(req, res) {
    // Retrieve all posts using the getAllPosts function
    const posts = await getAllPosts();

    // Send the retrieved posts as a JSON response with a 200 status code
    res.status(200).json(posts);
}

export async function makeNewPost(req, res) {
    const newPost = req.body;
    try {
        const createdPost = await createNewPost(newPost)
        res.status(200).json(createdPost);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({"Error": "Request failed"});
    }
}

export async function imageUpload(req, res) {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const createdPost = await createNewPost(newPost);
        const updatedImage = `uploads/${createdPost.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImage);
        res.status(200).json(createdPost);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({"Error": "Request failed"});
    }
}

export async function updateNewPost(req, res) {
    const id = req.params.id;
    const imgLocalUrl = `http://localhost:3000/${id}.png`;
    const updatedPost = {
        imgUrl: imgLocalUrl,
        description: req.body.description,
        alt: req.body.alt
    };
    try {
        const createdPost = await updatePost(id, updatedPost)
        res.status(200).json(createdPost);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({"Error": "Request failed"});
    }
}
