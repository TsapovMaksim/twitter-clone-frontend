import { UserSelectors } from '@store/ducks/user/selectors';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  const history = useHistory();
  const isAuth = useSelector(UserSelectors.selectIsAuth);
  useEffect(() => {
    if (isAuth) {
      history.push('/home');
    }
  }, [isAuth]);
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
