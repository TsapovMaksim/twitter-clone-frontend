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
      state.loadingState = TweetsLoadingState.LOADED;
    },
    fetchTweets(state) {
      state.items = [];
      state.loadingState = TweetsLoadingState.LOADING;
    },
    setLoadingState(state, action: PayloadAction<TweetsLoadingState>) {
      state.loadingState = action.payload;
    },
  },
});

export const tweetsReducer = tweets.reducer;
export const TweetsActions = tweets.actions;
