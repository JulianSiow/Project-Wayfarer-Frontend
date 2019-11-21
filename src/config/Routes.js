import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from '../components/Splash/Splash';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
// import City from '../components/City/City';
import Post from '../components/Post/Post';

import './Routes.css'

export default ({ currentUser, setCurrentUser }) => (
  <div className="routes">
    <Switch>
      <Route exact path="/"  render={() => <Splash currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
      <Route path="/users/:id" component={ProfileContainer} />
      {/* <Route path="/cities/:cityId" component={City} /> */}
      <Route path="/post/:postId" component={Post} />
    </Switch>
  </div>
)

// component={Splash}