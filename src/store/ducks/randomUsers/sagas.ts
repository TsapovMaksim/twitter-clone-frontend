import { takeLatest } from 'redux-saga/effects';
import { RandomUsersActions } from './slice';

function* fetchRandomUsersRequest() {}

export function* randomUsersSaga() {
  // yield takeLatest(RandomUsersActions.fetchUsers.type, fetchRandomUsersRequest);
}
