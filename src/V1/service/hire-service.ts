import { Hire } from '@prisma/client';
import { HireDTO } from './../DTO/hire-DTO';
import hireRepository from '../repository/hire-repository';
class HireService {
    post(dto : HireDTO):Promise<Hire> {
        return hireRepository.post(dto)
    }
}


export default new HireService()