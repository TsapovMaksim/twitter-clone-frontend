import { LoadingState } from '@store/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { ITweet } from './types/state';
import { TweetsActions } from './slice';
import { TweetsApi } from '@services/api/tweetsApi';
import { call, put, takeLatest } from 'redux-saga/effects';
import { IFetchAddTweetData } from './types/actions';

function* fetchTweetsRequest() {
  try {
    const data: ITweet[] = yield call(TweetsApi.fetchTweets);
    yield put(TweetsActions.setTweets(data));
  } catch (error) {
    yield put(TweetsActions.setLoadingState(LoadingState.ERROR));
  }
}

function* fetchAddTweetRequest(action: PayloadAction<IFetchAddTweetData>) {
  try {
    const tweet: ITweet = yield call(TweetsApi.addTweet, action.payload);
    yield put(TweetsActions.addTweet(tweet));
  } catch (error) {
    yield put(TweetsActions.setAddFormLoadingState(LoadingState.ERROR));
  }
}

function* fetchRemoveTweetRequest(action: PayloadAction<string>) {
  try {
    yield call(TweetsApi.removeTweet, action.payload);
  } catch (error) {
    alert('Ошибка при удалении твита(');
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActions.fetchTweets.type, fetchTweetsRequest);
  yield takeLatest(TweetsActions.fetchAddTweet.type, fetchAddTweetRequest);
  yield takeLatest(TweetsActions.removeTweet.type, fetchRemoveTweetRequest);
}
