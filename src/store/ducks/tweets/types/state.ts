export enum TweetsLoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export enum AddTweetFormLoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING',
}

export interface ITweet {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatar: string;
    email: string;
  };
}

export interface ITweetsState {
  items: ITweet[];
  loadingState: TweetsLoadingState;
  addFromState: AddTweetFormLoadingState;
}
