import { Technologies } from "../tech";

export type ProjectType = {
  name: string;
  url: string;
  description: string;

  image: string;
  video?: string;
  techs: Technologies[];
};
