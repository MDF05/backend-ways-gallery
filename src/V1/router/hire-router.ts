import {Router} from "express"
import hireController from "../controller/hire-controller"
import authentication from './../middleware/authentication';

const HireRouter = Router()

HireRouter.post("/hire/:hiredId", authentication,hireController.post)

export default HireRouter