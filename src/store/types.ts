import { IUserState } from "./user/types";
export interface IRootWithModule{
  user: IUserState
}

export interface IRootState{

}

export type IStoreType = IRootWithModule & IRootState