import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import { LoadingState } from '@store/types';
import { UserActions } from '@store/ducks/user/slice';
import { UserSelectors } from '@store/ducks/user/selectors';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from '@pages/Layout';

function App() {
  const history = useHistory();
  const pathName = history.location.pathname;
  const dispatch = useDispatch();
  const isAuth = useSelector(UserSelectors.selectIsAuth);
  const loadingStatus = useSelector(UserSelectors.selectUserStatus);
  const isReady =
    loadingStatus !== LoadingState.NEVER &&
    loadingStatus !== LoadingState.LOADING;

  useEffect(() => {
    dispatch(UserActions.fetchAuthUser());
  }, []);

  useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/signin');
    } else if (pathName === '/' || pathName === '/signin') {
      history.push('/home');
    }
  }, [isAuth, isReady]);

  if (!isReady) {
    return (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Layout>
          <Route path="/home" component={Home} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
