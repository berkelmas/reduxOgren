import {
    STUDENT_CREATE, STUDENT_CREATE_BUTTON
} from "../actions/types";

const INITIAL_STATE = {
    adsoyad : '',
    telefon : '',
    email : '',
    sube : '',
    test : false
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_CREATE:
            return {...state, [action.payload.props] : action.payload.value};
        case STUDENT_CREATE_BUTTON:
            return {...state, test : true};
        default:
            return state;
    }
};