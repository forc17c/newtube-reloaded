import express from "express"; // const express = require("express"); 와 같다.

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${req.protocol} ${req.path}`);
  if (req.protocol === "https") {
    console.log("Secure");
  } else {
    console.log("Insecure");
  }
  console.dir(req.protocol);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  console.log("Time:", year + "." + month + "." + date);
  return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger);
app.use(privateMiddleware); // 모든 app에 대하여 middleware를 적용

app.get("/", handleHome); // app.get("/", () => console.log("Somebody is trying to go home")); 로 쓸 수 있다.
app.get("/login", handleLogin);
app.get("/protected", handleProtected);
// middleware는 위에서부터 아래로 적용
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // app.listen(4000, () => console.log(`Server listening on port http://localhost:${PORT}`)); 로 쓸 수 있다.
