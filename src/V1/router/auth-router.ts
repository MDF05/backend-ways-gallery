import { Router } from "express";
import authController from "../controller/auth-controller";

const AuthRouter: Router = Router();

AuthRouter.post("/login", authController.login);
AuthRouter.post("/register", authController.register);
AuthRouter.get("/check", authController.checkToken);

export default AuthRouter;
