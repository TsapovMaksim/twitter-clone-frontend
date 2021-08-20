import { LoadingState } from '@store/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITweet } from '../tweets/types/state';
import { ICurrentTweetState } from './types/state';

const initialState: ICurrentTweetState = {
  data: null,
  loadingState: LoadingState.NEVER,
};

const currentTweet = createSlice({
  initialState,
  name: 'currentTweet',
  reducers: {
    setData(state, action: PayloadAction<ITweet | null>) {
      state.data = action.payload;
      state.loadingState = LoadingState.LOADED;
    },
    fetchData(state, payload: PayloadAction<string>) {
      state.loadingState = LoadingState.LOADING;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.loadingState = action.payload;
    },
  },
});

export const CurrentTweetActions = currentTweet.actions;
export const currentTweetReducer = currentTweet.reducer;
