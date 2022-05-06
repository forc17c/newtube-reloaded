import express from "express";
import { join, login } from "../controllers/userController"; //각각의 export로 불러온 파일은 export한 이름으로 import해야한다.
import { trending, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
