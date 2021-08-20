import { IUser } from './types/state';
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthApi } from '@services/api/authApi';
import { UserActions } from './slice';
import { takeLatest, call, put } from 'redux-saga/effects';
import { ILoginFormProps } from '@pages/SignIn/components/LoginModal';
import { LoadingState } from '@store/types';

function* fetchUserDataRequest({ payload }: PayloadAction<ILoginFormProps>) {
  try {
    const data: IUser = yield call(AuthApi.signIn, payload);
    localStorage.setItem('token', data.token);
    yield put(UserActions.setUserData(data));
  } catch (error) {
    yield put(UserActions.setLoadingState(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActions.fetchUserData.type, fetchUserDataRequest);
}
