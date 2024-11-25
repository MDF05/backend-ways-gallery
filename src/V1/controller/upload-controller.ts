import { NextFunction, Request, Response } from "express";
import { UploadDTO } from "../DTO/upload-DTO";
import cloudinary from "../libs/cloudinary";
import successResponse from "../utils/success-response";
import createError from "../utils/create-error";

class UploadController {
  async post(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      console.log(req.files);
      const body: UploadDTO = req.body;

      // if (req.files) body.images = await cloudinary.uploader(req.files as any);

      res.status(200).json(successResponse("user successfully registered", {}));
    } catch (err) {
      console.log(err);
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("An error occurred", 500));
    }
  }
}

export default new UploadController();
