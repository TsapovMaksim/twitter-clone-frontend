import React, { FC } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import classNames from 'classnames';
import { useStyles } from './styles';

interface Props {
  maxRows?: number;
}

const MAX_LENGTH = 200;

const AddTweetForm: FC<Props> = ({ maxRows }) => {
  const styles = useStyles();

  const [text, setText] = React.useState<string>('');
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextare = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText('');
  };

  return (
    <div>
      <div className={styles.addFormBody}>
        <Avatar
          className={styles.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://source.unsplash.com/random"
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
                  variant="static"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: 'red' } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="static"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={text.length >= MAX_LENGTH}
            color="primary"
            variant="contained"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
