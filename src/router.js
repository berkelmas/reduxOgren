import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Login from './components/loginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="kimlik">
                <Scene key="login" component={Login} title="Giriş Ekranı"/>
            </Scene>
        </Router>
    )
};

export default RouterComponent;