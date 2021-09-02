import React, { FC, useCallback, useEffect, useRef } from 'react';

import IconButton from '@material-ui/core/IconButton';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

import { IImageObj } from '@components/AddTweetForm';
import ImageList from '@components/ImageList';

interface Props {
  images: IImageObj[];
  onChangeImages: React.Dispatch<React.SetStateAction<IImageObj[]>>;
}

const UploadImages: FC<Props> = ({ images, onChangeImages }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const imageUrls = images.map(obj => obj.blobUrl);

  const handleUploadClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removeImage = (url: string) => {
    onChangeImages(images.filter(val => val.blobUrl !== url));
  };

  const handleChangeFileInput = useCallback((event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      const fileBlob = new Blob([file]);
      onChangeImages(prev => [
        ...prev,
        { file, blobUrl: URL.createObjectURL(fileBlob) },
      ]);
      target.value = '';
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChangeFileInput);
    }
    return () => {
      inputRef.current?.removeEventListener('change', handleChangeFileInput);
    };
  }, []);

  return (
    <>
      <input ref={inputRef} type="file" id="upload-input" hidden />
      <IconButton onClick={handleUploadClick} color="primary">
        <ImageOutlinedIcon style={{ fontSize: 26 }} />
      </IconButton>
      <ImageList images={imageUrls} removeImage={removeImage} />
    </>
  );
};

export default UploadImages;
