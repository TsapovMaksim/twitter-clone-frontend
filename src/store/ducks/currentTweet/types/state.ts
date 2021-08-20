import { ITweet } from '@store/ducks/tweets/types/state';

export enum CurrentTweetLoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export interface ICurrentTweetState {
  data: ITweet | null;
  loadingState: CurrentTweetLoadingState;
}
