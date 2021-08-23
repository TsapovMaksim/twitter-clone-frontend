import { RootState } from '@store/store';

export const RandomUsersSelectors = {
  selectUsers: (state: RootState) => state.randomUsers.items,
};
