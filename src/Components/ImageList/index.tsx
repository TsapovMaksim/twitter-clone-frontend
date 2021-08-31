import { FC } from 'react';
import { IImageObj } from '@components/AddTweetForm';
import { useStyles } from './styles';

import IconButton from '@material-ui/core/IconButton';

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

interface Props {
  images: IImageObj[];
  removeImage: (url: string) => void;
}

const ImageList: FC<Props> = ({ images, removeImage }) => {
  const styles = useStyles();
  return (
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
  );
};

export default ImageList;
