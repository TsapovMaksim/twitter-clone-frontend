import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CurrentTweetSelectors } from '../../store/ducks/currentTweet/selectors';
import { CurrentTweetActions } from '../../store/ducks/currentTweet/slice';
import Tweet from '../Tweet';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

interface IParams {
  id: 'string';
}

const FullTweet: FC = () => {
  const { id } = useParams<IParams>();
  const dispatch = useDispatch();
  const tweetData = useSelector(CurrentTweetSelectors.selectTweetData);
  const isTweetLoading = useSelector(
    CurrentTweetSelectors.selectIsCurrentTweetLoading
  );

  useEffect(() => {
    dispatch(CurrentTweetActions.fetchData(id));
    return () => {
      dispatch(CurrentTweetActions.setData(null));
    };
  }, []);

  if (isTweetLoading) {
    return (
      <Box marginTop="50px" textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (tweetData) {
    return <Tweet {...tweetData} />;
  }

  return null;
};

export default FullTweet;
