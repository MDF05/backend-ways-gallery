import { Router } from "express";
import AuthRouter from "../V1/router/auth-router";
import UploadRouter from "../V1/router/upload-router";
import ProfileRouter from "../V1/router/profile-router";

const V1Router = Router();

V1Router.use(AuthRouter);
V1Router.use(UploadRouter);
V1Router.use(ProfileRouter);

export default V1Router;
