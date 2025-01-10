import { ImageUrlTypes } from "../utils/types/image-url-types";


export interface FeedProjectDTO {
  date: string;
}


export interface PostProjectDTO {
  title :  string ;
  description : string
  Images : ImageUrlTypes[]
  userId : number
} 
