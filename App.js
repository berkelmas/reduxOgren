/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './src/reducers';
import RouterComponent from './src/router';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCjMduL-cfm11xatgCBYXbZ9YsivejE4Xw",
      authDomain: "reactauthdeneme.firebaseapp.com",
      databaseURL: "https://reactauthdeneme.firebaseio.com",
      projectId: "reactauthdeneme",
      storageBucket: "reactauthdeneme.appspot.com",
      messagingSenderId: "627494375899"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <RouterComponent/>
        </Provider>
    );
  }
}

export default App;


