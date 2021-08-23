import { LoadingState } from '@store/types';

export interface ITweet {
  _id: string;
  text: string;
  createdAt: string;
  user: {
    fullname: string;
    username: string;
    avatar: string;
    email: string;
  };
}

export interface ITweetsState {
  items: ITweet[];
  loadingState: LoadingState;
  addFromState: LoadingState;
}
