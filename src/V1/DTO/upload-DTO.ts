import { ImageUrlTypes } from "../utils/types/image-url-types";

export interface UploadDTO {
  title: string;
  description: string;
  images: ImageUrlTypes[] | null;
}
