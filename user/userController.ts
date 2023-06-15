import { Request, Response } from "express";

interface createUserRequest {
  name: string;
  email: string;
  password: string;
}

const createUser = (req:Request,res:Response)=>{
    const {name,email,password}:createUserRequest = req.body;
    if(!name||!email||!password){
        //createUser Logic
        console.log("enter the credentials")
        res.status(401).json({message:"enter the credentials"})
    }else{
        console.log("input credentials")
        res.status(200).json({message:"input the credentials"})
    }  
}

const loginUser = (req:Request,res:Response)=>{
    const {email,password} = req.body;
    //loginUser logic

}



module.exports = {
    createUser
} 