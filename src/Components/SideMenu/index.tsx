import { FC } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useStyles } from './styles';
import { Button } from '@material-ui/core';

interface Props {}

const SideMenu: FC<Props> = () => {
  const styles = useStyles();

  const listItems = [
    { text: 'Поиск', Icon: SearchOutlinedIcon },
    { text: 'Уведомления', Icon: NotificationsNoneOutlinedIcon },
    { text: 'Собщения', Icon: EmailOutlinedIcon },
    { text: 'Закладки', Icon: BookmarkBorderOutlinedIcon },
    { text: 'Список', Icon: ListAltOutlinedIcon },
    { text: 'Профиль', Icon: PersonOutlineOutlinedIcon },
  ];

  return (
    <List dense={false} style={{ width: 230 }}>
      <ListItem disableGutters className={styles.logo}>
        <ListItemIcon>
          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>
        </ListItemIcon>
      </ListItem>
      {listItems.map(({ text, Icon }) => (
        <ListItem disableGutters className={styles.navListItem}>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h6',
              component: 'h6',
              className: styles.navListItemText,
            }}
            primary={text}
          />
          <ListItemIcon className={styles.navListItemIcon}>
            <Icon />
          </ListItemIcon>
        </ListItem>
      ))}
      <ListItem className={styles.navListTweetButton}>
        <Button variant="contained" color="primary" fullWidth>
          Твитнуть
        </Button>
      </ListItem>
    </List>
  );
};

export default SideMenu;
