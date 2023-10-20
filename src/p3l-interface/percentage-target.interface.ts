import { Document } from "mongoose";

export interface IPercentageTargets extends Document {
  consultant: ITargets;
  srconsultant: ITargets;
  manager: ITargets;
  avp: ITargets;
  vp: ITargets;
  rt: ITargets;
  md: ITargets;
  createdBy: string;
  updatedBy: string;
  finYear: string;
}

export interface ITeams extends Document {
  createdBy: string;
  updatedBy: string;
  hr: People;
  it: People;
  finance: People;
  research:People;
}
export interface People {
  members: string[];
  projectCategory: string;
  projects: string[];
}
export interface ITargets {
  clientFacing: number;
  internalResearch: number;
  trainingInternal: number;
  bdClient: number;
  primusSolution: number;
  bdGeneral: number;
  internalFunctions: number;
}
