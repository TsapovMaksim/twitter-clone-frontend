import { LoadingState } from '@store/types';
import { IUser } from '@store/ducks/user/types/state';
export const state = {};

export interface IRandomUsersState {
  items: IUser[];
  loadingState: LoadingState;
}
