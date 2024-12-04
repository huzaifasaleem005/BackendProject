import express from "express";
import { albumsData } from "../albumsApi.js";

export const albumsRoute = express.Router();

albumsRoute.get("/",(req,res) =>{
    try {
        res.send({status:200,message:"Success", data:albumsData});
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
})