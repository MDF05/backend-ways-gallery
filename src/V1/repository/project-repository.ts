import { FeedProjectDTO, PostProjectDTO } from "../DTO/project-DTO";
import prisma from "../libs/prisma";
import { Project } from "@prisma/client";

class ProjectRepository {
  async gets(dto: FeedProjectDTO):Promise<Project[]> {
    const dataSplit = dto.date.split("-")
    const endDay = `${dataSplit[0]}-${dataSplit[1]}-${parseInt(dataSplit[2] ) + 1}`

    const startOfDay = new Date(`${dto.date}T00:00:00Z`);
    const endOfDay = new Date(`${endDay}T00:00:00Z`); 

    const feed: Project[] = await prisma.project.findMany({
      where : {
        createdAt :  {
          gte : startOfDay,
          lt : endOfDay
        }
      }
    })

    return feed
  }

  async posts(dto : PostProjectDTO):Promise<Project> {
      const {Images, ...otherDTO} = dto

    const post: Project = await prisma.project.create({
      data : {
        ...otherDTO,
        images : {
          createMany : {
            data : Images
          }
        }
      }
    })
    return post
  }

}




export default new ProjectRepository()