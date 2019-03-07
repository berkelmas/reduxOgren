import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Login from './components/loginForm';
import Logout from './components/logout';

const RouterComponent = () => {
    return (
        <Router>
        <Scene key="root" hideNavBar>
            <Scene key="kimlik">
                <Scene key="login" component={Login} title="Giriş Ekranı" initial/>
            </Scene>

            <Scene key="main">
                <Scene key="logout" component={Logout} title="Çıkış Ekranı"/>
            </Scene>
        </Scene>
        </Router>
    )
};

export default RouterComponent;