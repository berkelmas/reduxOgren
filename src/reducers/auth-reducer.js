import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_AUTH,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_AUTH,
    LOGOUT_SUCCESS, LOAD_CHANGE
} from "../actions/types";

const INITIAL_STATE = {
    email : '',
    password : '',
    loading : false,
    loggedIn : false,
    user : {}
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
            return {...state, loggedIn: true, loading : false, user : action.payload};
        case LOGIN_FAIL:
            return {...state, loggedIn: false, loading : false};
        case LOGOUT_AUTH:
            return {...state, loggedIn: false, loading : true};
        case LOGOUT_SUCCESS:
            return {...state, loggedIn: false, loading : false, email : '', password : ''};
        case LOAD_CHANGE:
            return {...state, loading : !action.payload};
        default:
            return state;
    }    
};
