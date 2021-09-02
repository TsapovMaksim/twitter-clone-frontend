import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Alert from '@material-ui/lab/Alert';

import UploadImages from '@components/UploadImages';

import { useStyles } from './styles';
import { TweetsActions } from '@store/ducks/tweets/slice';
import { TweetsSelectors } from '@store/ducks/tweets/selectors';
import { LoadingState } from '@store/types';
import { uploadImage } from '@utils/uploadImage';

interface Props {
  maxRows?: number;
}

export interface IImageObj {
  file: File;
  blobUrl: string;
}

const MAX_LENGTH = 200;

const AddTweetForm: FC<Props> = ({ maxRows }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');
  const [images, setImages] = useState<IImageObj[]>([]);
  const formLoadingState = useSelector(TweetsSelectors.selectAddFormState);
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;
  const isAddButtonDisabled =
    formLoadingState === LoadingState.LOADING ||
    !text ||
    text.length >= MAX_LENGTH;
  const isAlertVisible = formLoadingState === LoadingState.ERROR;

  const handleChangeTextare = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = async () => {
    let urls: string[] = [];
    dispatch(TweetsActions.setAddFormLoadingState(LoadingState.LOADING));

    for (let i = 0; i < images.length; i++) {
      const file = images[i].file;
      const { url } = await uploadImage(file);
      urls.push(url);
    }

    dispatch(TweetsActions.fetchAddTweet({ text, images: urls }));
    setText('');
    setImages([]);
  };

  return (
    <div>
      <div className={styles.addFormBody}>
        <Avatar
          className={styles.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src=""
        />
        <TextareaAutosize
          onChange={handleChangeTextare}
          className={styles.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={styles.addFormBottom}>
        <div
          className={classNames(
            styles.tweetFooter,
            styles.addFormBottomActions
          )}
        >
          <UploadImages images={images} onChangeImages={setImages} />
        </div>
        <div className={styles.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={styles.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: 'red' } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={isAddButtonDisabled}
            color="primary"
            variant="contained"
          >
            {formLoadingState === LoadingState.LOADING ? (
              <CircularProgress size={16} />
            ) : (
              'Твитнуть'
            )}
          </Button>
        </div>
      </div>
      {isAlertVisible && (
        <Alert severity="error">Произошла ошибка при добавлении твита</Alert>
      )}
    </div>
  );
};

export default AddTweetForm;
