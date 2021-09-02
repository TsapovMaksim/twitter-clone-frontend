import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown';
import { UserSelectors } from '@store/ducks/user/selectors';
import { UserActions } from '@store/ducks/user/slice';

interface Props {}

const UserSideProfile: FC<Props> = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const userData = useSelector(UserSelectors.selectUserData);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenPopup = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    window.localStorage.removeItem('token');
    dispatch(UserActions.signOut());
  };

  if (!userData) {
    return null;
  }

  return (
    <>
      <div className={styles.sideProfile} onClick={handleOpenPopup}>
        <Avatar src="" />
        <div className={styles.sideProfileInfo}>
          <b>{userData.fullname}</b>
          <Typography className={styles.sidePropfileText}>
            @{userData.username}
          </Typography>
        </div>
        <ArrowBottomIcon />
      </div>
      <Menu
        className={styles.menu}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClosePopup}
        keepMounted
      >
        <MenuItem onClick={handleClosePopup}>
          <Link to="/users/me">Мой профиль</Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <Link to="/signin">Выйти</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserSideProfile;
