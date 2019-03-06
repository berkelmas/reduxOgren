import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_AUTH, LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/types";

const INITIAL_STATE = {
    email : '',
    password : '',
    loading : false,
    loggedIn : false,
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email : action.payload};
        case PASSWORD_CHANGED:
            return {...state, password : action.payload};
        case LOGIN_AUTH:
            return {...state, loading : true};
        case LOGIN_SUCCESS:
            return {...state, loggedIn: true, loading : false};
        case LOGIN_FAIL:
            return {...state, loggedIn: false, loading : false};
        default:
            return state;
    }    
};
