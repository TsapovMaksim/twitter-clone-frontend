import { LoadingState } from '../../../types';

export interface IUser {
  _id: string;
  email: string;
  fullname: string;
  username: string;
  confirmed: boolean;
  token: string;
}

export interface IUserState {
  loadingState: LoadingState;
  data: IUser | undefined;
}
