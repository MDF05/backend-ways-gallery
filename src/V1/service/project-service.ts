import { Project } from "@prisma/client";
import { FeedProjectDTO, PostProjectDTO } from "../DTO/project-DTO";
import projectRepository from "../repository/project-repository";

class ProjectService {
  async gets(dto: FeedProjectDTO): Promise<Project[]> {
    return await projectRepository.gets(dto);
  }

  async post(dto: PostProjectDTO):Promise<Project> {
    return await projectRepository.posts(dto);
  }
}


export default new ProjectService()
