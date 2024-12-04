import express from "express";
import { todoData } from "../todosApi.js";

export const todosRoute = express.Router();

todosRoute.get("/",(req,res) =>{
    try {
        res.send({status:200,message:"Success", data:todoData});
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
})
