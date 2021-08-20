import React, { FC, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Alert from '@material-ui/lab/Alert';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import classNames from 'classnames';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { TweetsActions } from '@store/ducks/tweets/slice';
import { TweetsSelectors } from '@store/ducks/tweets/selectors';
import { AddTweetFormLoadingState } from '@store/ducks/tweets/types/state';

interface Props {
  maxRows?: number;
}

const MAX_LENGTH = 200;

const AddTweetForm: FC<Props> = ({ maxRows }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');
  const formLoadingState = useSelector(TweetsSelectors.selectAddFormState);
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;
  const isAddButtonDisabled =
    formLoadingState === AddTweetFormLoadingState.LOADING ||
    !text ||
    text.length >= MAX_LENGTH;
  const isAlertVisible = formLoadingState === AddTweetFormLoadingState.ERROR;

  const handleChangeTextare = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(TweetsActions.fetchAddTweet(text));
    setText('');
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
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
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
            {formLoadingState === AddTweetFormLoadingState.LOADING ? (
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
