import { LoadingState } from '@store/types';
import { RootState } from '@store/store';
import { ITweet } from './types/state';

export const TweetsSelectors = {
  selectTweetsItems: (state: RootState): ITweet[] => state.tweets.items,
  selectLoadingState: (state: RootState): LoadingState =>
    state.tweets.loadingState,
  selectIsTweetsLoading: (state: RootState) =>
    state.tweets.loadingState === LoadingState.LOADING,
  selectIsTweetsLoaded: (state: RootState) =>
    state.tweets.loadingState === LoadingState.LOADED,
  selectAddFormState: (state: RootState): LoadingState =>
    state.tweets.addFromState,
};
