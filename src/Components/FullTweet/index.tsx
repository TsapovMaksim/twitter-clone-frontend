import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CurrentTweetSelectors } from '../../store/ducks/currentTweet/selectors';
import { CurrentTweetActions } from '../../store/ducks/currentTweet/slice';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import { useStyles } from './styles';

interface IParams {
  id: 'string';
}

const FullTweet: FC = () => {
  const { id } = useParams<IParams>();
  const dispatch = useDispatch();
  const tweetData = useSelector(CurrentTweetSelectors.selectTweetData);
  const styles = useStyles();
  const isTweetLoading = useSelector(
    CurrentTweetSelectors.selectIsCurrentTweetLoading
  );

  const buttonIcons = [
    { Icon: ChatBubbleOutlineOutlinedIcon, label: 1 },
    { Icon: RepeatOutlinedIcon },
    { Icon: FavoriteBorderOutlinedIcon },
    { Icon: ReplyOutlinedIcon },
  ];

  useEffect(() => {
    if (id) {
      dispatch(CurrentTweetActions.fetchData(id));
    }
    return () => {
      dispatch(CurrentTweetActions.setData(null));
    };
  }, []);

  if (isTweetLoading) {
    return (
      <Box marginTop="50px" textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (tweetData) {
    const { user, text } = tweetData;
    return (
      <Paper variant="outlined" className={styles.tweet}>
        <Box className={styles.tweetHeader}>
          <Avatar
            className={styles.tweetAvatar}
            alt={`Аватар пользователя ${user.fullname}`}
            // src={user.avatar}
          />
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <br />
            <span className={styles.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={styles.tweetUserName}>.</span>&nbsp;
            <span className={styles.tweetUserName}>1 ч</span>&nbsp;
          </Typography>
        </Box>
        <Box className={styles.tweetContent}>
          <Typography className={styles.tweetText} gutterBottom>
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
  }

  return null;
};

export default FullTweet;
