import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  tweet: {
    padding: 22,
    border: 'none',
  },
  tweetHeader: {
    display: 'flex',
    width: '100%',
    marginBottom: 15,
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 450,
    width: '100%',
    margin: '0 auto',
    '& svg': {
      fontSize: 22,
    },
  },
  tweetContent: {
    width: '100%',
  },
  tweetWrapper: {
    color: 'inherit',
    textDecoration: 'none',
  },
  tweetText: {
    fontSize: 24,
    lineHeight: 1.3,
    wordBreak: 'break-word',
  },
}));
