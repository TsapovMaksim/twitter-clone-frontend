import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  tweet: {
    paddingTop: 15,
    paddingLeft: 20,
    cursor: 'pointer',
    display: 'flex',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
    },
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
    '& svg': {
      fontSize: 22,
    },
  },
  tweetContent: {
    width: '100%',
  },
}));
