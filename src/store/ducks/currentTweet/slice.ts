import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITweet } from '../tweets/types/state';
import { CurrentTweetLoadingState, ICurrentTweetState } from './types/state';

const initialState: ICurrentTweetState = {
  data: null,
  loadingState: CurrentTweetLoadingState.NEVER,
};

const currentTweet = createSlice({
  initialState,
  name: 'currentTweet',
  reducers: {
    setData(state, action: PayloadAction<ITweet | null>) {
      state.data = action.payload;
      state.loadingState = CurrentTweetLoadingState.LOADED;
    },
    fetchData(state, payload: PayloadAction<string>) {
      state.loadingState = CurrentTweetLoadingState.LOADING;
    },
    setLoadingState(state, action: PayloadAction<CurrentTweetLoadingState>) {
      state.loadingState = action.payload;
    },
  },
});

export const CurrentTweetActions = currentTweet.actions;
export const currentTweetReducer = currentTweet.reducer;
