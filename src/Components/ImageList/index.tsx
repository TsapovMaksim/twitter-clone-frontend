import { FC } from 'react';
import { useStyles } from './styles';

import IconButton from '@material-ui/core/IconButton';

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

interface Props {
  images: string[];
  removeImage?: (url: string) => void;
}

const ImageList: FC<Props> = ({ images, removeImage }) => {
  const styles = useStyles();
  return (
    <div className={styles.imagesList}>
      {images.map(url => (
        <div
          key={url}
          className={styles.imagesListItem}
          style={{ backgroundImage: `url(${url})` }}
        >
          {removeImage ? (
            <IconButton onClick={() => removeImage(url)}>
              <RemoveCircleIcon style={{ fontSize: 18 }} />
            </IconButton>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ImageList;
