import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadController from "../controller/project-controller";
import { upload } from "../middleware/upload";

const ProjectRouter: Router = Router();

ProjectRouter.post("/project",authentication, upload.array("images"), uploadController.post);
ProjectRouter.get("/projects",authentication, uploadController.gets);

export default ProjectRouter;
