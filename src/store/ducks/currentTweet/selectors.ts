import { RootState } from '@store/store';
import { CurrentTweetLoadingState } from './types/state';

export const CurrentTweetSelectors = {
  selectTweetData: (state: RootState) => state.currentTweet.data,
  selectIsCurrentTweetLoading: (state: RootState) =>
    state.currentTweet.loadingState === CurrentTweetLoadingState.LOADING,
};
