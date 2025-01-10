import { NextFunction, Request, Response } from "express";
import createError from "../utils/create-error";
import successResponse from "../utils/success-response";
import { HireDTO } from "../DTO/hire-DTO";
import hireService from "../service/hire-service";
import { Hire } from "@prisma/client";

class HireController {
    async post(req:Request, res : Response, next : NextFunction ) {
        try {
        const hiringId = res.locals.user.id
        const hiredId = req.params.id
        const dto:HireDTO = {...req.body,hiringId,hiredId}

        const hire:Hire = await hireService.post(dto)

        res.status(200).json(successResponse("succesffully hired", {}, 200))

        }catch(err) {
            if(err instanceof Error) next(createError(err.message,402))
            else next(createError("server errors sorry !", 505))
        }

    }
}


export default new HireController()