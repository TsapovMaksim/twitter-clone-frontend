import { RootState } from './../../store';

export const UserSelectors = {
  selectUserState: (state: RootState) => state.user,
  selectUserStatus: (state: RootState) => state.user.loadingState,
};
