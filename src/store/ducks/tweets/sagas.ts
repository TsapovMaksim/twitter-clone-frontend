import { ITweet, TweetsLoadingState } from './types/state';
import { TweetsActions } from './slice';
import { TweetsApi } from './../../../services/api/tweetsApi';
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchTweetsRequest() {
  try {
    const data: ITweet[] = yield call(TweetsApi.fetchTweets);
    yield put(TweetsActions.setTweets(data));
  } catch (error) {
    yield put(TweetsActions.setLoadingState(TweetsLoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActions.fetchTweets.type, fetchTweetsRequest);
}
