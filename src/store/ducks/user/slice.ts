import { IUser, IUserState } from './types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@store/types';
import { ILoginFormProps } from '@pages/SignIn/components/LoginModal';
import { IRegisterFormProps } from '@pages/SignIn/components/RegisterModal';

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
    fetchSignUp(state, action: PayloadAction<IRegisterFormProps>) {
      state.loadingState = LoadingState.LOADING;
    },
    fetchAuthUser(state) {
      state.loadingState = LoadingState.LOADING;
    },
  },
});

export const userReducer = userSlice.reducer;
export const UserActions = userSlice.actions;
