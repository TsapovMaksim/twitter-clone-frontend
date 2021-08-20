import { RootState } from '@store/store';
import {
  AddTweetFormLoadingState,
  ITweet,
  TweetsLoadingState,
} from './types/state';

export const TweetsSelectors = {
  selectTweetsItems: (state: RootState): ITweet[] => state.tweets.items,
  selectLoadingState: (state: RootState): TweetsLoadingState =>
    state.tweets.loadingState,
  selectIsTweetsLoading: (state: RootState) =>
    state.tweets.loadingState === TweetsLoadingState.LOADING,
  selectIsTweetsLoaded: (state: RootState) =>
    state.tweets.loadingState === TweetsLoadingState.LOADED,
  selectAddFormState: (state: RootState): AddTweetFormLoadingState =>
    state.tweets.addFromState,
};
