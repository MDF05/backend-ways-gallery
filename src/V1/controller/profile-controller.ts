import { Profile, User } from "@prisma/client";
import createError from "../utils/create-error";
import { NextFunction, Request, Response } from "express";
import successResponse from "../utils/success-response";
import profileService from "../service/profile-service";
import { profileDTO } from "../DTO/profile-DTO";
import cloudinary from "../libs/cloudinary";

class ProfileController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const user: User = res.locals.user;
      const profile: Profile = await profileService.getProfileByUserId(user.id);
      res.json(successResponse("data received", profile));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("sorry server error ", 500));
    }
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const profiles: Profile[] = await profileService.getAllProfiles();
      res.json(successResponse("data received", profiles));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("sorry server error ", 500));
    }
  }

  async getProfileById(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId: number = parseInt(req.params.profileId);
      const profile: Profile = await profileService.getProfileByProfileId(profileId);
      res.json(successResponse("data received", { profile }));
    } catch (err: unknown) {
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("sorry server error ", 500));
    }
  }

  async putProfileById(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId: number = parseInt(req.params.profileId);
      const newProfile: profileDTO = req.body;

      const avatar = await cloudinary.uploader((req.files as any).avatar);
      const bestArt = await cloudinary.uploader((req.files as any).bestArt);

      if (avatar) newProfile.avatar = avatar[0].imageUrl;
      if (bestArt) newProfile.bestArt = bestArt[0].imageUrl;

      const profile: Profile = await profileService.putProfileByProfileId(profileId, newProfile);
      res.json(successResponse("data received", profile));
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) next(createError(err.message, 400));
      else next(createError("sorry server error ", 500));
    }
  }
}

export default new ProfileController();
