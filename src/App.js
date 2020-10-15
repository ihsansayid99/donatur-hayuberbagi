import React from 'react';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'

import 'assets/css/style.css';

import DonaturRoute from 'components/Routes/DonaturRoute'
import GuestRoute from 'components/Routes/GuestRoute'

import Login from 'Pages/Login'
import Register from 'Pages/Register'
import UnAuthenticated from 'Pages/UnAuthenticated'
import NotFound from 'Pages/404'
import Donatur from 'Pages/Donatur'
import DonaturData from 'Pages/DonaturData'
import Donasi from 'Pages/Donasi'

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })
  return (
    <Router history={history}>
      <Switch>
        <GuestRoute path="/login" component={Login} />
        <GuestRoute path="/register" component={Register} />
        <GuestRoute path="/private" component={UnAuthenticated} />
        <DonaturRoute exact path="/" component={Donatur} />
        <DonaturRoute path="/donatur" component={DonaturData} />
        <DonaturRoute path="/donasi" component={Donasi} />
        <Route path="*" component={NotFound} />
      </Switch>

    </Router>
  );
}

export default App;
