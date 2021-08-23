import { combineReducers } from '@reduxjs/toolkit';

import { randomUsersReducer } from './ducks/randomUsers/slice';
import { userReducer } from './ducks/user/slice';
import { currentTweetReducer } from './ducks/currentTweet/slice';
import { tweetsReducer } from './ducks/tweets/slice';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  currentTweet: currentTweetReducer,
  user: userReducer,
  randomUsers: randomUsersReducer,
});
export default rootReducer;
