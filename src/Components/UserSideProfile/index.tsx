import React, { FC, useRef, useState } from 'react';
import { useStyles } from './styles';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown';

interface Props {}

const UserSideProfile: FC = (props: Props) => {
  const styles = useStyles();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const anchorRef = useRef<HTMLDivElement>();

  const handleOpenPopup = (e: React.MouseEvent<HTMLDivElement>) => {
    anchorRef.current = e.currentTarget;
    setVisiblePopup(true);
  };

  const handleClosePopup = () => {
    setVisiblePopup(false);
  };

  return (
    <>
      <div className={styles.sideProfile} onClick={handleOpenPopup}>
        <Avatar src="" />
        <div className={styles.sideProfileInfo}>
          <b>User</b>
          <Typography className={styles.sidePropfileText}>@dafa</Typography>
        </div>
        <ArrowBottomIcon />
      </div>
      <Popover
        open={visiblePopup}
        onClose={handleClosePopup}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        Content
      </Popover>
    </>
  );
};

export default UserSideProfile;
