"use strict";
const express = require("express");
const cors = require("cors");
require;
const { Client } = require('node-appwrite');
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(`[${process.env.APPWRITE_PROJECTID}]`)
    .setKey(`${process.env.APPWRITE_KEY}`);
console.log("appwrite connection established", process.env.APPWRITE_PROJECTID, process.env.APPWRITE_KEY);
app.listen(5000, () => { console.log("server started at 3000"); });
