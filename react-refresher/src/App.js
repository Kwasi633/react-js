import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return ( <Router>
  <MainNavigation />
  
  <main>
  <Switch>
  <Route path="/" exact>
      <Users />
    </Route>
    
  <Route path='/:userId/places' exact>
    <UserPlaces />
  </Route>

    <Route path="/places/new" exact>
      <NewPlace />
    </Route>

    <Redirect to="/" />
  </Switch>
  </main>
  </Router>
  )
}

export default App;
