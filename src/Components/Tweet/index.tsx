import React, { FC, useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useStyles } from './styles';
import { ITweet } from '@store/ducks/tweets/types/state';
import { useHistory } from 'react-router-dom';
import { formatDate } from '@utils/formatDate';

import ImageList from '@components/ImageList';

const Tweet: FC<ITweet> = ({ user, text, _id, createdAt, images }) => {
  const styles = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const buttonIcons = [
    {
      Icon: ChatBubbleOutlineOutlinedIcon,
      label: 1,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
    {
      Icon: RepeatOutlinedIcon,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
    {
      Icon: FavoriteBorderOutlinedIcon,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
    {
      Icon: ReplyOutlinedIcon,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
  ];

  const handleClickTweet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.push(`/home/tweet/${_id}`);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
    setIsOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <a
      onClick={handleClickTweet}
      className={styles.tweetWrapper}
      href={`/home/tweet/${_id}`}
    >
      <Paper variant="outlined" className={styles.tweet}>
        <Avatar
          className={styles.tweetAvatar}
          alt={`Аватар пользователя ${user.fullname}`}
          // src={user.avatar}
        />
        <Box className={styles.tweetContent}>
          <Typography className={styles.tweetUserInfo}>
            <b>{user.fullname}</b>&nbsp;
            <span className={styles.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={styles.tweetUserName}>.</span>&nbsp;
            <span className={styles.tweetUserName}>
              {formatDate(new Date(createdAt))}
            </span>
            <IconButton
              onClick={handleClick}
              className={styles.tweetMenuButton}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              onClick={e => e.stopPropagation()}
            >
              <MenuItem onClick={handleClose}>Удалить</MenuItem>
              <MenuItem onClick={handleClose}>Изменить</MenuItem>
            </Menu>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
            <ImageList images={images} />
          </Typography>
          <Box className={styles.tweetFooter}>
            {buttonIcons.map(({ Icon, label, onClick }, index) => (
              <Box key={index}>
                <IconButton onClick={onClick}>
                  <Icon color="primary" />
                </IconButton>
                {label && <span>{label}</span>}
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </a>
  );
};

export default Tweet;
