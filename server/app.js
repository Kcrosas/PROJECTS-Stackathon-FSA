const express = require("express");
const path = require("path");

const app = express();

const {
  models: { Employee },
} = require("./database");

// static middleware
app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use("/media", express.static(path.join(__dirname, "../media")));

app.get("/api/employees/all", async (req, res, next) => {
  try {
    res.send(await Employee.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = app;
