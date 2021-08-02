import { FC, useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { useStyles } from './styles';
import ModalBlock from '../ModalBlock';
import AddTweetForm from '../AddTweetForm';

interface Props {}

const SideMenu: FC<Props> = () => {
  const styles = useStyles();
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const listItems = [
    { text: 'Поиск', Icon: SearchOutlinedIcon },
    { text: 'Уведомления', Icon: NotificationsNoneOutlinedIcon },
    { text: 'Собщения', Icon: EmailOutlinedIcon },
    { text: 'Закладки', Icon: BookmarkBorderOutlinedIcon },
    { text: 'Список', Icon: ListAltOutlinedIcon },
    { text: 'Профиль', Icon: PersonOutlineOutlinedIcon },
  ];

  const handleClosePopup = () => {
    setIsVisiblePopup(false);
  };

  const handleTweetBtnClick = () => {
    setIsVisiblePopup(true);
  };

  return (
    <List className={styles.navList} style={{ maxWidth: 230 }}>
      <ListItem disableGutters className={styles.logo}>
        <ListItemIcon>
          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>
        </ListItemIcon>
      </ListItem>
      {listItems.map(({ text, Icon }, index) => (
        <ListItem key={index} disableGutters className={styles.navListItem}>
          <Hidden smDown>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h6',
                component: 'h6',
                className: styles.navListItemText,
              }}
              primary={text}
            />
          </Hidden>
          <ListItemIcon className={styles.navListItemIcon}>
            <Icon />
          </ListItemIcon>
        </ListItem>
      ))}
      <ListItem className={styles.navListTweetButton}>
        <Button
          onClick={handleTweetBtnClick}
          variant="contained"
          color="primary"
          fullWidth
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
      </ListItem>
      <ModalBlock visible={isVisiblePopup} onClose={handleClosePopup}>
        <div className={styles.addTweetFormWrapper}>
          <AddTweetForm maxRows={15} />
        </div>
      </ModalBlock>
    </List>
  );
};

export default SideMenu;
