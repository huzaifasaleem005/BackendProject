import express from "express";
import { posData } from "../postsApi.js";

export const postRoute = express.Router();

postRoute.get("/",(req,res) =>{
    try {
        res.send({status:200,message:"Success", data:posData});
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
})
