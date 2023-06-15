"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const { createUser } = require("./user/userController");
require("dotenv").config();
const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/api/items', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allItems = yield itemsPool.query('SELECT * FROM items');
        res.json({ allItems });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("error.message");
    }
}));
app.post('/api/items', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description } = req.body;
    try {
        const newItem = yield itemsPool.query('INSERT INTO items (description) VALUES ($1) RETURNING *', [description]);
        res.json({
            message: "New item added!",
            item: newItem.rows
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("error.message");
    }
}));
app.get('/user', (req, res) => {
    createUser(req, res);
});
app.listen(5000, () => { console.log("server started at 5000"); });
