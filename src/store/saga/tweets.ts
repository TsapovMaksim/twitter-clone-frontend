import { TweetsApi } from './../../services/api/tweetsApi';
import { tweetsActions } from './../slices/tweets/index';
import { call, takeEvery } from 'redux-saga/effects';

export function* fetchTweetsRequest() {
  const data: number = yield call(TweetsApi.fetchTweets);
  console.log(data);
}

export function* tweetsSaga() {
  yield takeEvery(tweetsActions.fetchTweets.type, fetchTweetsRequest);
}
