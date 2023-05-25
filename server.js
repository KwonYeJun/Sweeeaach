import express from "express";

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 2080;

app.use(express.static(path.join(__dirname, "/")));

app.get("/", (req, res) => {
  res.type("text/html");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/app.js", (req, res) => {
  res.type("text/javascript");
  res.sendFile(path.join(__dirname, "app.js"));
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Internal Server Error");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
