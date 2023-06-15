"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUser = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        //createUser Logic
        console.log("enter the credentials");
        res.status(401).json({ message: "enter the credentials" });
    }
    else {
        console.log("input credentials");
        res.status(200).json({ message: "input the credentials" });
    }
};
const loginUser = (req, res) => {
    const { email, password } = req.body;
    //loginUser logic
};
module.exports = {
    createUser
};
