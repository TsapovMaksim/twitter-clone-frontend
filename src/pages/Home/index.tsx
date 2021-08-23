import React, { FC, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SearchIcon from '@material-ui/icons/SearchOutlined';

import { useStyles } from './styles';
import Tweet from '@components/Tweet';
import SideMenu from '@components/SideMenu';
import AddTweetForm from '@components/AddTweetForm';
import { SearchTextField } from '@components/SearchTextField';
import BackButton from '@components/BackButton';
import FullTweet from '@components/FullTweet';
import RandomUsers from '@components/RandomUsers';
import Tags from '@components/Tags';

import { TweetsActions } from '@store/ducks/tweets/slice';
import { useDispatch, useSelector } from 'react-redux';
import { TweetsSelectors } from '@store/ducks/tweets/selectors';
import { Route } from 'react-router-dom';

interface Props {}

const Home: FC<Props> = ({}) => {
  const styles = useStyles();
  const tweets = useSelector(TweetsSelectors.selectTweetsItems);
  const isTweetsLoading = useSelector(TweetsSelectors.selectIsTweetsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TweetsActions.fetchTweets());
  }, []);

  return (
    <Container className={styles.wrapper} component="section" maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item sm={1} md={3}>
          <SideMenu />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={styles.tweetsWrapper} variant="outlined">
            <Paper className={styles.tweetsHeader} variant="outlined">
              <Route path="/home/:any">
                <BackButton />
              </Route>

              <Route exact path={['/home', '/home/search']}>
                <Typography variant="h6">Главная</Typography>
              </Route>
            </Paper>
            <Route exact path={['/home', '/home/search']}>
              <Paper>
                <Box className={styles.addTweetForm}>
                  <AddTweetForm />
                </Box>
                <div className={styles.addFormBottomLine} />
              </Paper>
            </Route>

            <Route exact path="/home">
              {isTweetsLoading ? (
                <Box marginTop="50px" textAlign="center">
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {tweets.map(props => (
                    <Tweet {...props} key={props._id} />
                  ))}
                </>
              )}
            </Route>

            <Route exact component={FullTweet} path="/home/tweet/:id" />
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
            {/* <Tags /> */}
            <RandomUsers />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
