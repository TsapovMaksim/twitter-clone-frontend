import { FC } from 'react';

import { createStyles, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';
import Tweet, { TweetProps } from '../../Components/Tweet';
import SideMenu from '../../Components/SideMenu';

interface Props {}

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',
      height: 45,
      padding: '0 10px',
    },
  })
)(InputBase);

const Home: FC<Props> = ({}) => {
  const styles = useStyles();

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

  return (
    <Container className={styles.wrapper} component="section">
      <Grid container>
        <Grid item xs={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.tweetsWrapper} variant="outlined">
            <Paper className={styles.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
          </Paper>
          {tweets.map(props => (
            <Tweet {...props} />
          ))}
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Поиск по Твиттеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
