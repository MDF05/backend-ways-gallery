import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadController from "../controller/upload-controller";
import { upload } from "../middleware/upload";

const UploadRouter: Router = Router();

UploadRouter.post("/upload", upload.array("images"), uploadController.post);

export default UploadRouter;
