import express from "express"

import {postRoute } from "./Routes/posts.js";
import { comRoute } from "./Routes/comments.js";
import { albumsRoute } from "./Routes/albums.js";
import { todosRoute } from "./Routes/todos.js";
import { usersRoute } from "./Routes/users.js";
import { photosRoute } from "./Routes/photos.js";
import dotenv from  "dotenv";
import cors from "cors"

const app = express();
dotenv.config();    
app.use(cors());

app.get("/", (req, res) => {
    res.send(`<div> <h1>Welcome To My Server</h1></div> 
        <h1>I'M Huzaifa</h1> `);
})

app.use("/posts",postRoute);
app.use("/comments",comRoute);
app.use("/albums",albumsRoute);
app.use("/photos",photosRoute);
app.use("/todos",todosRoute);
app.use("/users",usersRoute);


const PORT = process.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server Strated localhost:${PORT}`);
})