import express from "express";
import { phoData } from "../photosApi.js";

export const photosRoute = express.Router();

photosRoute.get("/",(req,res) =>{
    try {
        res.send({status:200,message:"Success", data:phoData});
    } catch (error) {
        res.status(400).send({message:"Something went wrong"});
    }
})