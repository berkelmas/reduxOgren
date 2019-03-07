import React, {Component} from 'react';
import {View, Text, TextInput, Picker} from "react-native";
import { connect } from 'react-redux';

import {studentCreateAction, studentCreateButtonAction} from "../actions";

import Button from './button';
import Spinner from './spinner';

class studentCreateForm extends Component {

    studentYap () {
        const {adsoyad, email, telefon, sube} = this.props;
        this.props.studentCreateButtonAction({adsoyad, email, telefon, sube});
    }


    render () {
        const {containerStyle, subcontainerStyle, inputStyle} = styles;

        return (
            <View style={containerStyle}>
                <View style={subcontainerStyle}>
                    <TextInput
                        placeholder={"Öğrenci Ad-Soyad"}
                        style={inputStyle}
                        value={this.props.adsoyad}
                        onChangeText={adsoyad => this.props.studentCreateAction({props: "adsoyad", value: adsoyad})}
                    />
                </View>

                <View style={subcontainerStyle}>
                    <TextInput
                        placeholder={"Öğrenci Telefon Numarası"}
                        style={inputStyle}
                        value={this.props.telefon}
                        onChangeText={telefon => this.props.studentCreateAction({props: "telefon", value: telefon})}
                    />
                </View>

                <View style={subcontainerStyle}>
                    <TextInput
                        placeholder={"Öğrenci Email"}
                        style={inputStyle}
                        value={this.props.email}
                        onChangeText={email => this.props.studentCreateAction({props : "email", value : email})}
                    />
                </View>

                <View style={subcontainerStyle}>
                    <Text>Öğrenci Şubesi</Text>

                    <Picker
                    style={{flex : 1}}
                    selectedValue={this.props.sube}
                    onValueChange={sube => this.props.studentCreateAction({props: "sube", value : sube})}
                    >

                        <Picker.Item label="A Şubesi" value="asube" />
                        <Picker.Item label="B Şubesi" value="bsube" />
                        <Picker.Item label="C Şubesi" value="csube" />

                    </Picker>

                </View>

                <View style={subcontainerStyle}>
                    <Button onPress={/*this.firebaseGonder.bind(this)*/this.studentYap.bind(this)}>Öğrenci Oluştur</Button>
                </View>

            </View>
        )
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
    inputStyle : {
        color : '#000',
        paddingRight : 5,
        paddingLeft : 5,
        fontSize : 18,
        lineHeight : 23,
        flex : 2
    }
};

const mapToStateProps = ({studentResponse}) => {
    const {adsoyad, email, telefon, sube} = studentResponse;
    return ({
        adsoyad,
        email,
        telefon,
        sube
    })
};

export default connect(mapToStateProps, { studentCreateAction, studentCreateButtonAction })(studentCreateForm);