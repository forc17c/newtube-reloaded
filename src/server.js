import express from "express"; // const express = require("express"); 와 같다.
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter"; // defalut export로 불러온 파일은 이름을 원하는대로 지을 수 있다.

const PORT = 4000;

// 현재 작업 directory -> console.log(process.cwd());

const app = express();
const logger = morgan("dev"); // middleware의 하나

app.set("view engine", "pug"); // express에 view engine이 pug라는 것을 알려준다. (pug를 view engine으로 설정한다)
app.set("views", process.cwd() + "/src/views"); // views 폴더가 src 폴더 안에 있어도 pug가 작동하게 해준다. (current working directory의 경로를 바꿔줌)
app.use(logger); // app.use : 모든 app에 대하여 middleware를 적용
app.use(express.urlencoded({ extended: true })); // -> 내 express application에 form의 value들을 이해할 수 있도록 하고, 자바스크립트 형식으로 변형시켜준다.
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// app.get("/", () => console.log("Somebody is trying to go home")); 로 쓸 수 있다.

// middleware는 위에서부터 아래로 적용

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // app.listen(4000, () => console.log(`Server listening on port http://localhost:${PORT}`)); 로 쓸 수 있다.
