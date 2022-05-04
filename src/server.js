import express from "express"; // const express = require("express"); 와 같다.

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (req, res, next) => {
  return res.send("I love middlewares");
};
const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};
app.get("/", gossipMiddleware, handleHome); // app.get("/", () => console.log("Somebody is trying to go home")); 로 쓸 수 있다.
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // app.listen(4000, () => console.log(`Server listening on port http://localhost:${PORT}`)); 로 쓸 수 있다.
