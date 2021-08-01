import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: '100vh',
    paddingTop: 15,
  },

  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderRadius: 0,
    borderLeft: 0,
    borderRight: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800,
    },
  },
}));
