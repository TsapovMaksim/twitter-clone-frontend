import { axios } from '@core/axios';

interface IUploadImageReturnProps {
  height: number;
  width: number;
  url: string;
  size: number;
}

export const uploadImage = async (
  image: File
): Promise<IUploadImageReturnProps> => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post<IUploadImageReturnProps>(
    '/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
};
