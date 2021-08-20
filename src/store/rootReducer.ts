import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './ducks/user/slice';
import { currentTweetReducer } from './ducks/currentTweet/slice';
import { tweetsReducer } from './ducks/tweets/slice';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  currentTweet: currentTweetReducer,
  user: userReducer,
});
export default rootReducer;
