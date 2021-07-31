import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '100vh',
  },
  blueSide: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#1da1f2',
  },
  blueSideList: {
    width: 380,
    '& h6': {
      color: 'white',
      fontSize: 20,
    },
    '& svg': {
      color: 'white',
    },
  },
  blueSideListIcon: {
    fontSize: 32,
  },
  blueSideListIconWrapper: {
    minWidth: 50,
  },
  loginSide: {
    display: 'grid',
    placeItems: 'center',
  },
  loginSideWrapper: {
    width: 380,
    '& button:first-of-type': {
      marginBottom: 10,
    },
  },
  loginSideIcon: {
    fontSize: 45,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  loginSideDescrText: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));
