import { all } from 'redux-saga/effects';
import { currentTweetSaga } from './ducks/currentTweet/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';

export default function* rootSaga() {
  yield all([tweetsSaga(), currentTweetSaga()]);
}
