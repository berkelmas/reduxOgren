import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import {emailChanged, passwordChanged, loginAuth } from "../actions";
import Button from './button';
import Spinner from './spinner';

import Logout from './logout';

class Login extends Component {

    state = {mail : '', password : '', loading : false};

    componentWillMount() {
        console.log('compWillMount');
    };

    firebaseGonder() {
        const {mail, password} = this.state;

        this.setState({loading : true});

        firebase.auth().signInWithEmailAndPassword(mail, password )
            .then(this.loginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(mail, password)
                    .then(this.loginSuccess.bind(this))
                    .catch(this.loginFail.bind(this));
            })
    }

    loginSuccess () {
        console.log('loginSuccess');
        this.setState({loading : false});
    };

    loginFail () {
        console.log('loginFailed');
        this.setState({loading : false});
    };

    loginYap () {
        const {email, password} = this.props;
        this.props.loginAuth({email, password});
    };

    renderButton () {
        if (!this.props.loading) {
            return <Button onPress={/*this.firebaseGonder.bind(this)*/this.loginYap.bind(this)}>Giriş</Button>
        }
        return <Spinner/>
    };

    renderPage () {
        const {containerStyle, subcontainerStyle, inputStyle} = styles;
        if (this.props.loggedIn === false) {
            return (
                <View style={containerStyle}>
                    <View style={subcontainerStyle}>
                        <TextInput
                            placeholder={"E-Mail"}
                            style={inputStyle}
                            value={this.props.email}
                            onChangeText={email => this.props.emailChanged(email)}
                        />
                    </View>

                    <View style={subcontainerStyle}>
                        <TextInput
                            secureTextEntry={true}
                            placeholder={"Password"}
                            style={inputStyle}
                            value={this.props.password}
                            onChangeText={password => this.props.passwordChanged(password)}
                        />
                    </View>

                    <View style={subcontainerStyle}>
                        {this.renderButton()}
                    </View>

                </View>
            )
        } else if (this.props.loggedIn) {
            return (


                        <Logout/>


            )
        }
    }


    render() {



        return (
            <View>
            {this.renderPage()}
            </View>
        );
    };

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
  inputStyle : {
      color : '#000',
      paddingRight : 5,
      paddingLeft : 5,
      fontSize : 18,
      lineHeight : 23,
      flex : 2
  }
};

const mapToStateProps = ({authResponse}) => {
    const {email, password, loading, loggedIn} = authResponse;
    return ({
        email,
        password,
        loading,
        loggedIn
    })
};

export default connect(mapToStateProps, { emailChanged, passwordChanged, loginAuth })(Login);