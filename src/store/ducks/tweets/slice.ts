import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AddTweetFormLoadingState,
  ITweet,
  ITweetsState,
  TweetsLoadingState,
} from './types/state';

const initialState: ITweetsState = {
  items: [],
  loadingState: TweetsLoadingState.NEVER,
  addFromState: AddTweetFormLoadingState.NEVER,
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
    setAddFormLoadingState(
      state,
      action: PayloadAction<AddTweetFormLoadingState>
    ) {
      state.addFromState = action.payload;
    },
    addTweet(state, action: PayloadAction<ITweet>) {
      state.items = [action.payload, ...state.items];
      state.addFromState = AddTweetFormLoadingState.LOADED;
    },
    fetchAddTweet(state, action: PayloadAction<string>) {
      state.addFromState = AddTweetFormLoadingState.LOADING;
    },
  },
});

export const tweetsReducer = tweets.reducer;
export const TweetsActions = tweets.actions;
