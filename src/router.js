import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import Login from './components/loginForm';
import Logout from './components/logout';
import studentCreateForm from './components/studentCreate';

const RouterComponent = () => {
    return (
        <Router>
        <Scene key="root" hideNavBar>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.student()}
                    rightTitle="Öğrenci Ekle"
                    key="logout"
                    component={Logout}
                    title="Çıkış Ekranı"/>
            </Scene>

            <Scene key="kimlik">
                <Scene key="login" component={Login} title="Giriş Ekranı"/>
            </Scene>

            <Scene key="student">
                <Scene key="ogrenciolustur" component={studentCreateForm} title="Öğrenci Oluştur"/>
            </Scene>


        </Scene>
        </Router>
    )
};

export default RouterComponent;