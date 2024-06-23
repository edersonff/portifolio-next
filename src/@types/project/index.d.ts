import { Technologies } from "../tech";

export type Project = {
  name: string;
  url: string;
  description: string;

  image: string;
  video?: string;
  techs: Technologies[];
};
