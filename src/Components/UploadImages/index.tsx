import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import IconButton from '@material-ui/core/IconButton';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import { uploadImage } from '@utils/uploadImage';

import { useStyles } from './styles';

import { IImageObj } from '@components/AddTweetForm';

interface Props {
  images: IImageObj[];
  onChangeImages: React.Dispatch<React.SetStateAction<IImageObj[]>>;
}

const UploadImages: FC<Props> = ({ images, onChangeImages }) => {
  const styles = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

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
      <div className={styles.imagesList}>
        {images.map(({ blobUrl }) => (
          <div
            key={blobUrl}
            className={styles.imagesListItem}
            style={{ backgroundImage: `url(${blobUrl})` }}
          >
            <IconButton onClick={() => removeImage(blobUrl)}>
              <RemoveCircleIcon style={{ fontSize: 18 }} />
            </IconButton>
          </div>
        ))}
      </div>
    </>
  );
};

export default UploadImages;
