import express from "express";

const posts = [
    {
        id: 1,
        description: "a picture",
        image: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        description: "A delicious pizza!",
        image: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        description: "Coding in progress...",
        image: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        description: "Beautiful sunset view",
        image: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        description: "My favorite cat!",
        image: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server listening...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function searchPostByID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = searchPostByID(req.params.id)
    res.status(200).json(posts[index]);
});