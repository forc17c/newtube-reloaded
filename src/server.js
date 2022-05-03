import express from "express"; // const express = require("express"); 와 같다.
import req from "express/lib/request";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.get("/", handleHome); // app.get("/", () => console.log("Somebody is trying to go home")); 로 쓸 수 있다.
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // app.listen(4000, () => console.log(`Server listening on port http://localhost:${PORT}`)); 로 쓸 수 있다.
