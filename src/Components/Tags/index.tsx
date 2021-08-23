import React, { FC } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import { useStyles } from '@pages/Home/styles';

interface Props {}

const Tags: FC<Props> = ({}) => {
  const styles = useStyles();
  const rightSideListItems = [
    'Твитов: 3 331',
    'Твитов: 3 1231',
    'Твитов: 6 451',
  ];
  return (
    <Paper className={styles.rightSideBlock}>
      <Paper className={styles.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {rightSideListItems.map((text, index) => (
          <React.Fragment key={index}>
            <ListItem className={styles.rightSideBlockItem}>
              <ListItemText
                primary="Санкт-Петербург"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="textSecondary"
                  >
                    {text}
                  </Typography>
                }
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default Tags;
