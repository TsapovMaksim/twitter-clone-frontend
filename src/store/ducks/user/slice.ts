import { IUser, IUserState } from './types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../types';
import { ILoginFormProps } from '../../../pages/SignIn/components/LoginModal';

const initialState: IUserState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserData(state, action: PayloadAction<ILoginFormProps>) {
      state.loadingState = LoadingState.LOADING;
    },
    setUserData(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
      state.loadingState = LoadingState.SUCCESS;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.loadingState = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const UserActions = userSlice.actions;
