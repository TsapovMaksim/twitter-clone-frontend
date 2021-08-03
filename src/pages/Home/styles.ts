import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: '100vh',
    paddingTop: 15,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
    },
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
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
  addTweetForm: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
}));
