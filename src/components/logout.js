import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import Button from './button'
import Spinner from './spinner';
import {logoutAuth} from "../actions";

class Logout extends Component {

    renderPage () {
        const {loading} = this.props;
        if (loading === false) {
            return (
                <View style={styles.containerStyle}>
                    <View style={styles.subcontainerStyle}>
                        <Text>Hoşgeldiniz, {this.props.user.email}</Text>
                    </View>

                    <View style={styles.subcontainerStyle}>
                        <Text>Öğrenci 1</Text>
                        <Text>Öğrenci 1</Text>
                        <Text>Öğrenci 1</Text>
                        <Text>Öğrenci 1</Text>
                        <Text>Öğrenci 2</Text>
                    </View>

                    <View style={styles.subcontainerStyle}>
                <Button onPress={this.props.logoutAuth} >Çıkış Yap</Button>
                    </View>

        </View>
            )
        } else if (loading === true) {
            return (
                <View style={styles.containerStyle}>
                    <View style={styles.subcontainerStyle}>
                        <Spinner/>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                {this.renderPage()}
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        borderWidth : 1,
        borderRadius : 2,
        borderColor : '#ddd',
        borderBottomWidth : 0,
        shadowColor : '#000',
        shadowOffset : { width : 0, height : 2},
        shadowOpacity : 0.2,
        shadowRadius : 2,
        elevation : 1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 20,


    },
    subcontainerStyle : {
        borderBottomWidth: 1,
        padding : 5,
        backgroundColor: '#fff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#ddd',
        position : 'relative',
    },
};

const mapToStateProps = ({authResponse}) => {
    const {loading, loggedIn, user} = authResponse;
    return ({
        loggedIn,
        loading,
        user
    })
};

export default connect(mapToStateProps, {logoutAuth})(Logout);