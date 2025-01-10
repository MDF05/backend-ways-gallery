import { Router } from "express";
import AuthRouter from "../V1/router/auth-router";
import ProjectRouter from "../V1/router/project-router";
import ProfileRouter from "../V1/router/profile-router";
import HireRouter from "../V1/router/hire-router";

const V1Router = Router();

V1Router.use(AuthRouter);
V1Router.use(ProjectRouter);
V1Router.use(ProfileRouter);
V1Router.use(HireRouter)


export default V1Router;
