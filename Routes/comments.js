import express from "express";
import {comData} from "../commentsApi.js";

export const comRoute = express.Router();

comRoute.get("/",(req,res) =>{
    try {
        res.send({status:200,message:"Success", data:comData});
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
})