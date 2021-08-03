import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  navList: {
    maxWidth: 230,
    position: 'sticky',
    top: 0,
    minWidth: 70,
  },
  logo: {
    paddingLeft: 25,
    paddingRight: 3,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
    cursor: 'pointer',
    '& svg': {
      fontSize: 36,
    },
    '& button': {
      padding: 10,
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
  navListItem: {
    height: 55,
    cursor: 'pointer',
    flexDirection: 'row-reverse',
    padding: 0,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30,
    transition: `
      background-color 0.15s ease-in-out,
      color 0.15s ease-in-out,
      path 0.15s ease-in-out
      `,
    marginBottom: 6,
    '& button': {
      padding: 8,
    },
    '&:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
      color: theme.palette.primary.main,
      '& svg path': {
        fill: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      paddingLeft: 0,
      justifyContent: 'center',
    },
  },
  navListItemText: {
    fontWeight: 700,
    fontSize: 20,
  },
  navListItemIcon: {
    minWidth: 40,
    '& svg': {
      fontSize: 28,
    },
    [theme.breakpoints.down('md')]: {
      minWidth: 'auto',
    },
  },
  navListTweetButton: {
    marginTop: 30,
    padding: 0,
    paddingLeft: theme.spacing(3),
    '& button': {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      '& button': {
        padding: 0,
      },
    },
  },
  addTweetFormWrapper: {
    width: 450,
  },
}));
