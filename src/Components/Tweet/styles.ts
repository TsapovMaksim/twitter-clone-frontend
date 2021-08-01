import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  tweet: {
    paddingTop: 15,
    paddingLeft: 10,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
    },
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 450,
    '& svg': {
      fontSize: 22,
    },
  },
}));
