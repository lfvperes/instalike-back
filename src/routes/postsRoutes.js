import express from "express";
import multer from "multer";
import { listAllPosts, makeNewPost, imageUpload, updateNewPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const upload = multer({dest: "./uploads"})

const routes = (app) => {
    // Enable JSON parsing for incoming requests
    app.use(express.json());
    app.use(cors(corsOptions));

    // Define a route handler for the '/posts' endpoint
    app.get("/posts", listAllPosts);
    app.post("/posts", makeNewPost);
    app.post("/upload", upload.single("image"), imageUpload);

    app.put("/upload/:id", updateNewPost);
};

export default routes;