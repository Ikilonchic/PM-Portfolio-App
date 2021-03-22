import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styles from './App.scss';

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import CreatePortfolio from './pages/CreatePortfolio/CreatePortfolio';

function App() {
  return <Router>
    <Switch>
      <Route exact path='/portfolio'>
        <Home />
      </Route>
      <Route exact path='/portfolio/create'>
        <CreatePortfolio />
      </Route>
      <Route exact path='/portfolio/:id'>
        <Portfolio />
      </Route>
      <Route>
        <Redirect to='/portfolio' />
      </Route>
    </Switch>
  </Router>;
}

export default App;
