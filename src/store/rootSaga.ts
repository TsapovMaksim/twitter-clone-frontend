import { all } from 'redux-saga/effects';
import { tweetsSaga } from './saga/tweets';

export default function* rootSaga() {
  yield all([tweetsSaga()]);
}
