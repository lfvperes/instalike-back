import express from "express";
import { listAllPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Enable JSON parsing for incoming requests
    app.use(express.json());

    // Define a route handler for the '/posts' endpoint
    app.get("/posts", listAllPosts);
};

export default routes;