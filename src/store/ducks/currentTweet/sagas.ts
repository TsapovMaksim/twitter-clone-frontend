import { LoadingState } from '@store/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { CurrentTweetActions } from './slice';
import { takeLatest, put, call } from 'redux-saga/effects';
import { ITweet } from '../tweets/types/state';
import { TweetsApi } from '@services/api/tweetsApi';

function* fetchCurrentTweetRequest(action: PayloadAction<string>) {
  try {
    const data: ITweet = yield call(TweetsApi.fetchTweetData, action.payload);
    yield put(CurrentTweetActions.setData(data));
  } catch (error) {
    yield put(CurrentTweetActions.setLoadingState(LoadingState.ERROR));
  }
}

export function* currentTweetSaga() {
  yield takeLatest(
    CurrentTweetActions.fetchData.type,
    fetchCurrentTweetRequest
  );
}
