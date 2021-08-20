import { LoadingState } from '@store/types';
import { ITweet } from '@store/ducks/tweets/types/state';

export interface ICurrentTweetState {
  data: ITweet | null;
  loadingState: LoadingState;
}
