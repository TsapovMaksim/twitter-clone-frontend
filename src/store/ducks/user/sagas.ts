import { IUser } from './types/state';
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthApi } from '@services/api/authApi';
import { UserActions } from './slice';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LoadingState } from '@store/types';
import { ILoginFormProps } from '@pages/SignIn/components/LoginModal';
import { IRegisterFormProps } from '@pages/SignIn/components/RegisterModal';

function* fetchUserDataRequest({ payload }: PayloadAction<ILoginFormProps>) {
  try {
    const data: IUser = yield call(AuthApi.signIn, payload);
    localStorage.setItem('token', data.token);
    yield put(UserActions.setUserData(data));
  } catch (error) {
    yield put(UserActions.setLoadingState(LoadingState.ERROR));
  }
}

function* fetchSignUp({ payload }: PayloadAction<IRegisterFormProps>) {
  try {
    const data: IUser = yield call(AuthApi.signUp, payload);
    yield put(UserActions.setUserData(data));
  } catch (error) {
    yield put(UserActions.setLoadingState(LoadingState.ERROR));
  }
}

function* fetchAuthUser() {
  try {
    const data: IUser = yield call(AuthApi.getMe);
    yield put(UserActions.setUserData(data));
  } catch (error) {
    yield put(UserActions.setLoadingState(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActions.fetchUserData.type, fetchUserDataRequest);
  yield takeLatest(UserActions.fetchSignUp.type, fetchSignUp);
  yield takeLatest(UserActions.fetchAuthUser.type, fetchAuthUser);
}
