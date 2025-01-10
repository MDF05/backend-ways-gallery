import { HireDTO } from "../DTO/hire-DTO";
import prisma from "../libs/prisma";

class HireRepository {
     async post(dto: HireDTO) {
        const hire = prisma.hire.create({
            data : dto
        })

        return hire
    }

    
}

export default new HireRepository()