import express from "express";
import { join } from "../controllers/userController"; //각각의 export로 불러온 파일은 export한 이름으로 import해야한다.
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
