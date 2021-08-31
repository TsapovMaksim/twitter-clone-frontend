import { IFetchAddTweetData } from './types/actions';
import { LoadingState } from '@store/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITweet, ITweetsState } from './types/state';

const initialState: ITweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFromState: LoadingState.NEVER,
};

const tweets = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setTweets(state, action: PayloadAction<ITweet[]>) {
      state.items = action.payload;
      state.loadingState = LoadingState.LOADED;
    },
    fetchTweets(state) {
      state.items = [];
      state.loadingState = LoadingState.LOADING;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.loadingState = action.payload;
    },
    setAddFormLoadingState(state, action: PayloadAction<LoadingState>) {
      state.addFromState = action.payload;
    },
    addTweet(state, action: PayloadAction<ITweet>) {
      state.items = [action.payload, ...state.items];
      state.addFromState = LoadingState.LOADED;
    },
    fetchAddTweet(state, action: PayloadAction<IFetchAddTweetData>) {
      state.addFromState = LoadingState.LOADING;
    },
  },
});

export const tweetsReducer = tweets.reducer;
export const TweetsActions = tweets.actions;
