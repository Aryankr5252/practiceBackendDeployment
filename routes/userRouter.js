import express from "express";
import AllowanceModel from "../models/AllowanceRequestModel.js";
import { registerEmail } from "../utils/emailService.js";
import UserModel from "../models/UserModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try{
        let {user, amount, description, date} = req.body;
        let createAllownace = await AllowanceModel.create({
            user,
            amount,
            description,
            date
        })
        let {email} = await UserModel.findOne({department: "HR"});
        await registerEmail(email, user);

        res.status(201).json({
            message: "User registered successfully",
            success: true
        });
    }catch(err){
        res.status(400).json({message: err.message});
    }
})

router.get("/", async (req, res) => {
    try{
        let allwance = AllowanceModel.find({});
        res.status(201).send(createAllownace);
    }catch(err){
        res.status(400).json({message: err.message});
    }
})

export default router;