import { Request, Response } from "express";

const express = require("express")
const cors = require("cors")
const{ createUser} = require("./user/userController")
require("dotenv").config()

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/items', async(req:Request, res:Response) => {
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM items'
        );
        res.json({ allItems});
    } catch (error) {
        console.log(error);
        res.status(500).send("error.message")
    }
})

app.post('/api/items', async (req:Request, res:Response) => {
    const { description } = req.body;
    try {
        const newItem = await itemsPool.query(
            'INSERT INTO items (description) VALUES ($1) RETURNING *',
            [description]
        );
        res.json({ 
            message: "New item added!",
            item: newItem.rows
         });
    } catch (error) {
        console.log(error);
        res.status(500).send("error.message")
    }
})

app.get('/user', (req:Request,res:Response)=>{
    createUser(req,res)
})
       

app.listen(5000, ()=>{console.log("server started at 5000")})

