export enum TweetsLoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface ITweet {
  text: string;
  fullName: string;
  userName: string;
  avatar: string;
}

export interface ITweetsState {
  items: ITweet[];
  loadingState: TweetsLoadingState;
  count: number;
}
