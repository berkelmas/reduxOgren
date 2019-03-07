import {Actions} from 'react-native-router-flux';

import {
    STUDENT_CREATE,
    STUDENT_CREATE_BUTTON
} from "./types";


export const studentCreateAction = ({props, value}) => {
      return (dispatch) => {
            dispatch({
                type: STUDENT_CREATE,
                payload: {props, value}
            })
    }
};

export const studentCreateButtonAction = ({adsoyad, email, telefon, sube}) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_CREATE_BUTTON
        });
        console.log('studentCreateButtonAction Çalıştı...')
    }

};