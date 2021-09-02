import { colors, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  sideProfile: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    bottom: 30,
    padding: '10px 15px',
    width: 260,
    borderRadius: 50,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.lightBlue[50],
    },
  },
  sideProfileInfo: {
    flex: 1,
    marginLeft: 10,
    '& b': {
      fontSize: 16,
    },
  },
  sidePropfileText: {
    color: colors.grey[500],
  },
  menu: {
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
}));
