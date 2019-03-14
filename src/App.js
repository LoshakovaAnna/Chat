import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Login from './screens/Login';
import Chat from './screens/Chat';

class App extends Component {
  render() {
    return (     
        <div>
          <Route  exact path='/'      component = {Login}/>
          <Route   path='/chat' component = {Chat}/>         

      </div>
    );
  }
}

export default App;
