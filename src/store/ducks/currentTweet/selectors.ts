import { LoadingState } from '@store/types';
import { RootState } from '@store/store';

export const CurrentTweetSelectors = {
  selectTweetData: (state: RootState) => state.currentTweet.data,
  selectIsCurrentTweetLoading: (state: RootState) =>
    state.currentTweet.loadingState === LoadingState.LOADING,
};
