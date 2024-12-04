import express from "express";
import { userData } from "../usersApi.js";

export const usersRoute = express.Router();

usersRoute.get("/",(req,res) =>{
    try {
        res.send({status:200,message:"Success", data:userData});
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
})
