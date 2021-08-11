import { axios } from '../../core/axios';
import { ITweet } from '../../store/ducks/tweets/types/state';

interface Respone<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchTweets(): Promise<ITweet[]> {
    const data = await axios
      .get<Respone<ITweet[]>>('/tweets')
      .then(({ data }) => data);

    return data.data;
  },
};
