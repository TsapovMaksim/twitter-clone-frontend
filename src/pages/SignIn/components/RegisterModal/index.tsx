import React, { FC, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import ModalBlock from '@components/ModalBlock';

import { useStyles } from '@pages/SignIn/styles';
import { Controller, useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '@store/ducks/user/slice';
import { UserSelectors } from '@store/ducks/user/selectors';
import { LoadingState } from '@store/types';

interface RegisterModalProps {
  open: boolean;
  handleCloseModal: () => void;
}

export interface IRegisterFormProps {
  email: string;
  fullname: string;
  username: string;
  password: string;
  password2: string;
}

const RegisterFormSchema = yup.object().shape({
  email: yup.string().email('неверная почта').required('Введите почту'),
  username: yup.string().required('Введите логин'),
  fullname: yup.string().required('Введите полное имя'),
  password: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .required(),
  password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

const RegisterModal: FC<RegisterModalProps> = ({ open, handleCloseModal }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const loadingState = useSelector(UserSelectors.selectUserStatus);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterFormProps>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = handleSubmit(async data => {
    dispatch(UserActions.fetchSignUp(data));
  });

  useEffect(() => {
    if (loadingState === LoadingState.SUCCESS) {
      handleCloseModal();
    } else if (loadingState === LoadingState.ERROR) {
      console.log('Error register');
    }
  }, [loadingState]);

  return (
    <ModalBlock
      visible={open}
      onClose={handleCloseModal}
      title="Создайте учетную запись"
    >
      <form onSubmit={onSubmit}>
        <FormControl
          className={styles.loginFormControl}
          component="fieldset"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  className={styles.registerField}
                  autoFocus
                  id="username"
                  label="Логин"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  helperText={errors.username?.message}
                  error={!!errors.username}
                  fullWidth
                  {...field}
                />
              )}
            />
            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  className={styles.registerField}
                  autoFocus
                  id="fullname"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  helperText={errors.fullname?.message}
                  error={!!errors.fullname}
                  fullWidth
                  {...field}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  className={styles.registerField}
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  helperText={errors.email?.message}
                  error={!!errors.email}
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
                  className={styles.registerField}
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
            <Controller
              name="password2"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  className={styles.registerField}
                  id="password2"
                  label="Повторите пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  helperText={errors.password2?.message}
                  error={!!errors.password2}
                  fullWidth
                  {...field}
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Далее
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default RegisterModal;
