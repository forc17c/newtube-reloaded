import express from "express"; // const express = require("express"); 와 같다.
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter"; // defalut export로 불러온 파일은 이름을 원하는대로 지을 수 있다.

const PORT = 4000;

const app = express();
const logger = morgan("dev"); // middleware의 하나
app.use(logger); // app.use : 모든 app에 대하여 middleware를 적용

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// app.get("/", () => console.log("Somebody is trying to go home")); 로 쓸 수 있다.

// middleware는 위에서부터 아래로 적용

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // app.listen(4000, () => console.log(`Server listening on port http://localhost:${PORT}`)); 로 쓸 수 있다.
