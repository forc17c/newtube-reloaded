import express from "express"; // const express = require("express"); 와 같다.
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev"); // middleware의 하나

app.use(logger); // app.use : 모든 app에 대하여 middleware를 적용

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// app.get("/", () => console.log("Somebody is trying to go home")); 로 쓸 수 있다.

// middleware는 위에서부터 아래로 적용

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // app.listen(4000, () => console.log(`Server listening on port http://localhost:${PORT}`)); 로 쓸 수 있다.
