import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  imagesList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
    '& img': {
      maxWidth: '100%',
    },
  },
  imagesListItem: {
    width: 45,
    height: 45,
    overflow: 'hidden',
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '& button': {
      padding: 3,
    },
    '& svg path': {
      fill: 'red',
    },
  },
}));
