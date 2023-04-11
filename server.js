//main entry point
import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// const express = require("express");
// const colors = require("colors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");

//dotenv config
dotenv.config();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server is running",
  });
});

//PORT
const port = process.env.PORT || 8080;

// LISTEN PORT
app.listen(port, () => {
  connectDB();
  console.log(
    `server is running in ${process.env.DEV_MODE} MODE on port ${port} `.bgCyan
      .white
  );
});
