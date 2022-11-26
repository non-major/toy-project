import { Router } from "express";
import { userService } from "../services/user-service.js";

const userRouter = Router()

userRouter.post("/register",async(req,res,next)=>{
    const {email,password,nickname} = req.body

    const newUser = await userService.addUser({
        email,
        password,
        nickname
    })
    res.status(201).json(newUser)
})

export {userRouter}