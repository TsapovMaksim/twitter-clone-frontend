import { FC, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from './styles';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import ModalBlock from '../../Components/ModalBlock';
import { useToggle } from '../../hooks/useToggle';

interface Props {}

const SignIn: FC<Props> = ({}) => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useToggle(true);
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

  const listItems = [
    { text: 'Читайте о том, что вам интересно', Icon: SearchOutlinedIcon },
    { text: 'Узнайте, о чем говорят в мире', Icon: GroupOutlinedIcon },
    { text: 'Присоединяйтесь к общению', Icon: ChatBubbleOutlineOutlinedIcon },
  ];

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  return (
    <Grid container className={styles.wrapper}>
      <Grid item xs={6} className={styles.blueSide}>
        <List className={styles.blueSideList}>
          {listItems.map(({ text, Icon }, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemIcon className={styles.blueSideListIconWrapper}>
                <Icon className={styles.blueSideListIcon} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ variant: 'h6', component: 'h6' }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={6} className={styles.loginSide}>
        <Box className={styles.loginSideWrapper}>
          <TwitterIcon color="primary" className={styles.loginSideIcon} />
          <Typography variant="h4" className={styles.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography className={styles.loginSideDescrText}>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOpenSignUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleClickOpenSignIn}
          >
            Войти
          </Button>
        </Box>
        <ModalBlock
          visible={visibleModal === 'signIn'}
          onClose={handleCloseModal}
          title="Войти в аккаунт"
        >
          <FormControl
            className={styles.loginFormControl}
            component="fieldset"
            fullWidth
          >
            <FormGroup aria-label="position" row>
              <TextField
                className={styles.loginSideField}
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
                className={styles.loginSideField}
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
              <Button
                onClick={handleCloseModal}
                variant="contained"
                color="primary"
                fullWidth
              >
                Войти
              </Button>
            </FormGroup>
          </FormControl>
        </ModalBlock>
        <ModalBlock
          visible={visibleModal === 'signUp'}
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
      </Grid>
    </Grid>
  );
};

export default SignIn;
