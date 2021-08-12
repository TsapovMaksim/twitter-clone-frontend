import { PayloadAction } from '@reduxjs/toolkit';
import { CurrentTweetActions } from './slice';
import { takeLatest, put, call, take } from 'redux-saga/effects';
import { CurrentTweetLoadingState } from './types/state';
import { ITweet } from '../tweets/types/state';
import { TweetsApi } from '../../../services/api/tweetsApi';

function* fetchCurrentTweetRequest(action: PayloadAction<string>) {
  console.log('In saga: ', action);

  try {
    const data: ITweet = yield call(TweetsApi.fetchTweetData, action.payload);
    yield put(CurrentTweetActions.setData(data));
  } catch (error) {
    yield put(
      CurrentTweetActions.setLoadingState(CurrentTweetLoadingState.ERROR)
    );
  }
}

export function* currentTweetSaga() {
  yield takeLatest(
    CurrentTweetActions.fetchData.type,
    fetchCurrentTweetRequest
  );
}
