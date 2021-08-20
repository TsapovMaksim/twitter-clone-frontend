import React, { FC } from 'react';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import ModalBlock from '../../../../Components/ModalBlock';
import { useStyles } from '../../styles';

interface RegisterModalProps {
  open: boolean;
  handleCloseModal: () => void;
}

const RegisterModal: FC<RegisterModalProps> = ({ open, handleCloseModal }) => {
  const styles = useStyles();
  return (
    <ModalBlock
      visible={open}
      onClose={handleCloseModal}
      title="Создайте учетную запись"
    >
      <FormControl
        className={styles.loginFormControl}
        component="fieldset"
        fullWidth
      >
        <FormGroup aria-label="position" row>
          <TextField
            className={styles.registerField}
            autoFocus
            id="name"
            label="Имя"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="name"
            fullWidth
          />
          <TextField
            className={styles.registerField}
            autoFocus
            id="email"
            label="E-Mail"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="email"
            fullWidth
          />
          <TextField
            className={styles.registerField}
            autoFocus
            id="password"
            label="Пароль"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="password"
            fullWidth
          />
          <Button variant="contained" color="primary" fullWidth>
            Далее
          </Button>
        </FormGroup>
      </FormControl>
    </ModalBlock>
  );
};

export default RegisterModal;
