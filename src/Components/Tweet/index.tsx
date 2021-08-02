import { FC } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import { useStyles } from './styles';

export interface TweetProps {
  fullName: string;
  userName: string;
  text: string;
  avatar?: string;
  likesCount: number;
}

const Tweet: FC<TweetProps> = ({
  fullName,
  userName,
  text,
  avatar,
  likesCount,
}) => {
  const styles = useStyles();
  const buttonIcons = [
    { Icon: ChatBubbleOutlineOutlinedIcon, label: likesCount },
    { Icon: RepeatOutlinedIcon },
    { Icon: FavoriteBorderOutlinedIcon },
    { Icon: ReplyOutlinedIcon },
  ];

  return (
    <Paper variant="outlined" className={styles.tweet}>
      <Avatar
        className={styles.tweetAvatar}
        alt={`Аватар пользователя ${fullName}`}
        src={avatar}
      />
      <Box className={styles.tweetContent}>
        <Typography>
          <b>{fullName}</b>&nbsp;
          <span className={styles.tweetUserName}>@{userName}</span>&nbsp;
          <span className={styles.tweetUserName}>.</span>&nbsp;
          <span className={styles.tweetUserName}>1 ч</span>&nbsp;
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        <Box className={styles.tweetFooter}>
          {buttonIcons.map(({ Icon, label }, index) => (
            <Box key={index}>
              <IconButton>
                <Icon color="primary" />
              </IconButton>
              {label && <span>{label}</span>}
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default Tweet;
