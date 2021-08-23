import { all } from 'redux-saga/effects';
import { currentTweetSaga } from './ducks/currentTweet/sagas';
import { randomUsersSaga } from './ducks/randomUsers/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';
import { userSaga } from './ducks/user/sagas';

export default function* rootSaga() {
  yield all([tweetsSaga(), currentTweetSaga(), userSaga(), randomUsersSaga()]);
}
