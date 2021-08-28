import React, { FC, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from '@pages/SignIn/styles';
import ModalBlock from '@components/ModalBlock';

import { UserActions } from '@store/ducks/user/slice';
import { UserSelectors } from '@store/ducks/user/selectors';
import { LoadingState } from '@store/types';

interface LoginModalProps {
  open: boolean;
  handleCloseModal: () => void;
}

export interface ILoginFormProps {
  email: string;
  password: string;
}

const loginFormSchema = yup.object().shape({
  email: yup.string().email('неверная почта').required('Введите почту'),
  password: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .required(),
});

const LoginModal: FC<LoginModalProps> = ({ open, handleCloseModal }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const loadingStatus = useSelector(UserSelectors.selectUserStatus);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginFormProps>({
    resolver: yupResolver(loginFormSchema),
  });
  const isSubmitButtonDisabled = loadingStatus === LoadingState.LOADING;

  const onSubmit = handleSubmit(async data => {
    dispatch(UserActions.fetchUserData(data));
  });

  useEffect(() => {
    if (loadingStatus === LoadingState.SUCCESS) {
      handleCloseModal();
    } else if (loadingStatus === LoadingState.ERROR) {
      console.log('Error login');
    }
  }, [loadingStatus]);

  return (
    <ModalBlock
      visible={open}
      onClose={handleCloseModal}
      title="Войти в аккаунт"
    >
      <form onSubmit={onSubmit}>
        <FormControl
          className={styles.loginFormControl}
          component="fieldset"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  className={styles.loginSideField}
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  helperText={errors.email?.message}
                  error={!!errors.email}
                  autoFocus
                  fullWidth
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  className={styles.loginSideField}
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  helperText={errors.password?.message}
                  error={!!errors.password}
                  fullWidth
                  {...field}
                />
              )}
            />

            <Button
              // onClick={handleCloseModal}
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitButtonDisabled}
              fullWidth
            >
              Войти
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default LoginModal;
