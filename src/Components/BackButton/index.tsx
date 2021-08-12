import { FC } from 'react';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  backButton: {
    marginRight: '20px',
  },
});

const BackButton: FC = () => {
  const history = useHistory();
  const styles = useStyles();

  const handleClickButton = () => {
    history.goBack();
  };

  return (
    <IconButton
      onClick={handleClickButton}
      color="primary"
      className={styles.backButton}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
