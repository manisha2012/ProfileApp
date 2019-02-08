import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Index from './components/Index';
import ManageProfile from './components/ManageProfile';

const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root" hideNavBar={true}>
            <Scene key="index" component={Index} hideNavBar={true}/>
            <Scene key="profile" component={ManageProfile} hideNavBar={true}/>
        </Scene>
    </Router>
  )
};

export default RouterComponent;
