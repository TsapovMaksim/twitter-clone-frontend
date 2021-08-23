import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import { useStyles } from '@pages/Home/styles';
import { RandomUsersSelectors } from '@store/ducks/randomUsers/selectors';

interface Props {}

const RandomUsers: FC<Props> = ({}) => {
  const styles = useStyles();
  const users = useSelector(RandomUsersSelectors.selectUsers);
  return (
    <Paper className={styles.rightSideBlock}>
      <Paper className={styles.rightSideBlockHeader} variant="outlined">
        <b>Кого читать</b>
      </Paper>
      <List>
        {users.map(({ email, username, _id }) => (
          <React.Fragment key={_id}>
            <ListItem className={styles.rightSideBlockItem}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="" />
              </ListItemAvatar>
              <ListItemText
                primary={username}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="textSecondary"
                  >
                    @{email}
                  </Typography>
                }
              />
              <Button color="primary">
                <PersonAddIcon />
              </Button>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default RandomUsers;
