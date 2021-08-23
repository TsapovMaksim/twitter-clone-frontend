import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@store/ducks/user/types/state';
import { LoadingState } from '@store/types';
import { IRandomUsersState } from './types/state';

const initialState: IRandomUsersState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

const randomUsersSlice = createSlice({
  name: 'randomUsers',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.items = action.payload;
      state.loadingState = LoadingState.LOADED;
    },
    fetchUsers(state, action: PayloadAction<string>) {
      state.loadingState = LoadingState.LOADING;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.loadingState = action.payload;
    },
  },
});

export const randomUsersReducer = randomUsersSlice.reducer;
export const RandomUsersActions = randomUsersSlice.actions;
