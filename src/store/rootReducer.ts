import { currentTweetReducer } from './ducks/currentTweet/slice';
import { tweetsReducer } from './ducks/tweets/slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  currentTweet: currentTweetReducer,
});
export default rootReducer;
