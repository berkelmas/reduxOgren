import firebase from "firebase";

import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_AUTH} from "./types";


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
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginSuccess(dispatch, user))
                    .catch(loginFail());
            })

    }
};

const loginSuccess = (dispatch, user) => {
        dispatch({
            type : LOGIN_SUCCESS,
            payload : user
        });
        console.log('başarılı');
};

const loginFail = (dispatch) => {
    return(dispatch) => {
        dispatch({
            type : LOGIN_FAIL
        })
    }
};
