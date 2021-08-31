import { axios } from '@core/axios';
import { IFetchAddTweetData } from '@store/ducks/tweets/types/actions';
import { ITweet } from '@store/ducks/tweets/types/state';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchTweets(): Promise<ITweet[]> {
    const data = await axios
      .get<Response<ITweet[]>>('/tweets')
      .then(({ data }) => data);

    return data.data;
  },
  async fetchTweetData(id: string): Promise<ITweet> {
    const data = await axios
      .get<Response<ITweet>>(`/tweets/${id}`)
      .then(({ data }) => data);

    return data.data;
  },

  async addTweet({ text, images }: IFetchAddTweetData): Promise<ITweet> {
    const tweet = await axios
      .post<Response<ITweet>>('/tweets', { text, images })
      .then(({ data }) => data);

    return tweet.data;
  },
};
