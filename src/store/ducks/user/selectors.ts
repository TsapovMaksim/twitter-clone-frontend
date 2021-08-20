import { RootState } from '@store/store';

export const UserSelectors = {
  selectUserState: (state: RootState) => state.user,
  selectUserStatus: (state: RootState) => state.user.loadingState,
};
