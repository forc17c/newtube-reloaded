import express from "express";
import { watch, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); // -> videoRouter.route("/:id(\\d+)").get(watch); 로 쓸 수 있다.
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// get은 정보를 받는다.(form을 화면에 보여준다) post는 정보를 보낸다.(변경사항을 저장해준다)

export default videoRouter;
