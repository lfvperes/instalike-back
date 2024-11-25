import express from "express";
import multer from "multer";
import { listAllPosts, makeNewPost, imageUpload } from "../controllers/postsController.js";

const upload = multer({dest: "./uploads"})

const routes = (app) => {
    // Enable JSON parsing for incoming requests
    app.use(express.json());

    // Define a route handler for the '/posts' endpoint
    app.get("/posts", listAllPosts);
    app.post("/posts", makeNewPost);
    app.post("/upload", upload.single("image"), imageUpload);
};

export default routes;