import { NextFunction, Request, Response } from "express";
import { FeedProjectDTO, PostProjectDTO } from "../DTO/project-DTO";
import cloudinary from "../libs/cloudinary";
import successResponse from "../utils/success-response";
import createError from "../utils/create-error";
import projectService from "../service/project-service";
import { Project } from "@prisma/client";

class ProjectController {
  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const body: PostProjectDTO = {...req.body, userId : res.locals.user.id};

      if (req.files) body.Images = (await cloudinary.uploader(req.files as any)) ?? [];


      const project:Project = await projectService.post(body)

      res.status(200).json(successResponse("data succesfully received", project));
    } catch (err) {
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("An error occurred", 500));
    }
  }
  async gets(req: Request, res: Response, next: NextFunction) {
    try {
      const body: FeedProjectDTO = req.body;
      const feedProject:Project[] = await projectService.gets(body) 

      res.status(200).json(successResponse("succesfullly get project",feedProject));
    } catch (err) {
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("An error occurred", 500));
    }
  }
}

export default new ProjectController();
