import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path='/fav'>
          <FavPage></FavPage>
        </Route>
        <Route path='/new'>
          <NewMeetupsPage></NewMeetupsPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
