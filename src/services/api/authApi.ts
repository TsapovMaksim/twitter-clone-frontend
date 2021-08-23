import { IUser } from '@store/ducks/user/types/state';
import { axios } from '@core/axios';
import { ILoginFormProps } from '@pages/SignIn/components/LoginModal';
import { IRegisterFormProps } from '@pages/SignIn/components/RegisterModal';

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

  async signUp(postData: IRegisterFormProps): Promise<IUser> {
    const { data } = await axios.post<Response<IUser>>(
      '/auth/register',
      postData
    );

    return data.data;
  },
};
