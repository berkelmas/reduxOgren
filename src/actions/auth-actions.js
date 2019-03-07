import firebase from "firebase";
import {Actions} from 'react-native-router-flux';

import {EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_FAIL,
        LOGIN_SUCCESS,
        LOGIN_AUTH,
        LOGOUT_SUCCESS,
        LOGOUT_AUTH,
        LOAD_CHANGE
    } from "./types";


export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type : EMAIL_CHANGED,
            payload : email
        })
    }
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type : PASSWORD_CHANGED,
            payload : password
        })
    }
};

export const loginAuth = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_AUTH
        });

        firebase.auth().signInWithEmailAndPassword(email, password )
            .then(user => loginSuccess(dispatch, user))
            .catch(loginFail(dispatch))

    }
};

const loginSuccess = (dispatch, user) => {
        dispatch({
            type : LOGIN_SUCCESS,
            payload : user
        });
        Actions.main();
};

const loginFail = (dispatch) => {
        dispatch({
            type : LOGIN_FAIL
        });
        console.log('giriş başarısız...');
};


export const logoutAuth = (dispatch) => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_AUTH
        });
            firebase.auth().signOut()
                .then(logoutSuccess(dispatch))
    }
};

export const logoutSuccess = (dispatch) => {
    dispatch({
        type : LOGOUT_SUCCESS
    });
    Actions.kimlik();
    console.log('çıkış başarılı...');
};

export const loadChange = ({loading}) => {
    return (dispatch) => {
        dispatch({
            type : LOAD_CHANGE,
            payload : loading
        });
    }
};


