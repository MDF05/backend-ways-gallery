import { Router } from "express";
import AuthRouter from "../V1/router/auth-router";
import uploadRouter from "../V1/router/upload-router";

const V1Router = Router();

V1Router.use(AuthRouter);
V1Router.use(uploadRouter);

export default V1Router;
