import { FC } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';

interface Props {}

const SignIn: FC<Props> = ({}) => {
  const styles = useStyles();

  const listItems = [
    { text: 'Читайте о том, что вам интересно', Icon: SearchOutlinedIcon },
    { text: 'Узнайте, о чем говорят в мире', Icon: GroupOutlinedIcon },
    { text: 'Присоединяйтесь к общению', Icon: ChatBubbleOutlineOutlinedIcon },
  ];

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
          <Button variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
