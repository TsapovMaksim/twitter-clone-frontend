import React, { FC, useState } from 'react';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import { useStyles } from './styles';
import Tweet, { TweetProps } from '../../Components/Tweet';
import SideMenu from '../../Components/SideMenu';
import AddTweetForm from '../../Components/AddTweetForm';
import { SearchTextField } from '../../Components/SearchTextField';

interface Props {}

const Home: FC<Props> = ({}) => {
  const styles = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const tweets: TweetProps[] = [
    {
      fullName: 'asd',
      userName: '123',
      likesCount: 1,
      text: 'Tweet text',
      avatar: 'https://source.unsplash.com/random',
    },
    {
      fullName: 'asd',
      userName: '123',
      likesCount: 1,
      text: 'Tweet text',
      avatar: 'https://source.unsplash.com/random',
    },
  ];
  const rightSideListItems = [
    'Твитов: 3 331',
    'Твитов: 3 1231',
    'Твитов: 6 451',
  ];

  return (
    <Container className={styles.wrapper} component="section" maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item sm={1} md={3}>
          <SideMenu />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={styles.tweetsWrapper} variant="outlined">
            <Paper className={styles.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <Box className={styles.addTweetForm}>
                <AddTweetForm />
              </Box>
              <div className={styles.addFormBottomLine} />
            </Paper>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <>
                {tweets.map((props, index) => (
                  <Tweet {...props} key={index} />
                ))}
              </>
            )}
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={styles.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
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
            <Paper className={styles.rightSideBlock}>
              <Paper className={styles.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={styles.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                      >
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
