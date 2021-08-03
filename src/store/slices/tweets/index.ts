import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITweet, ITweetsState, TweetsLoadingState } from './types/state';

const initialState: ITweetsState = {
  items: [],
  loadingState: TweetsLoadingState.NEVER,
  count: 0,
};

const tweets = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setTweets(state, action: PayloadAction<ITweet[]>) {
      state.items = action.payload;
    },
    fetchTweets() {},
  },
});

export const tweetsReducer = tweets.reducer;
export const tweetsActions = tweets.actions;
