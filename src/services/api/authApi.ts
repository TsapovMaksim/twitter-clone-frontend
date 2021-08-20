import { IUser } from './../../store/ducks/user/types/state';
import { axios } from '../../core/axios';
import { ILoginFormProps } from '../../pages/SignIn/components/LoginModal';

interface Response<T> {
  status: string;
  data: T;
}

export const AuthApi = {
  async signIn(postData: ILoginFormProps): Promise<IUser> {
    const { data } = await axios.post<Response<IUser>>('/auth/login', {
      username: postData.email,
      password: postData.password,
    });
    return data.data;
  },
};
