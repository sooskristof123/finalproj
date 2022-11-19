import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Image, Text, TouchableOpacity, View } from 'react-native';
import {auth} from '../firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function LoginScreenHu(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //handling login button press
    const handlePressLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                if (user) {
                    //navigation.navigate('Main');
                }
            })
        .catch(error => alert(error.message));
    };
    return (
        <KeyboardAvoidingView style = {[styles.view]}>
            <Image source = {require('../img/logo.png')} style = {{width: 150, height: 150, marginBottom: 20}} />
            <Text style = {[styles.headline]}>Lépj be</Text>
            <TextInput style = {[styles.input]} placeholder='Email' onChangeText={setEmail}></TextInput>
            <TextInput style = {[styles.input]} placeholder='Jelszó' secureTextEntry onChangeText={setPassword}></TextInput>
            <TouchableOpacity style = {[styles.button]} onPress = {handlePressLogin}>
                <Text style = {[styles.buttonText]} >Belépés</Text>
            </TouchableOpacity>
            <View style = {[styles.noAccountContainer]}>
                <Text>Még nincs felhasználód?</Text>
                <TouchableOpacity style = {{marginLeft : 5}}>
                    <Text style = {{color : '#8e0000'}}>Regisztrálj</Text>
                </TouchableOpacity>
            </View>
            <Icon name = 'account'/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    view : {
        backgroundColor : '#eceff1',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    noAccountContainer : {
        marginTop : 20,
        display : 'flex',
        flexDirection : 'row'
    },
    headline : {
        fontSize : 40,
        marginBottom : 15,
        color : '#000051',
        fontWeight : 'bold'
    },
    input : {
        width : 300,
        height : 40,
        borderRadius : 10,
        backgroundColor : 'rgba(226,226,226, 0.8)',
        marginBottom : 10
    },
    button : {
        marginTop : 20,
        alignItems : 'center',
        borderRadius : 20,
        borderColor : '#000051',
        borderWidth : 1,
        width : 220,
        paddingTop : 5,
        paddingBottom : 5
    },
    buttonText : {
        fontSize : 20,
        color : '#000051',
        fontWeight : 'bold'
    }
});

export default LoginScreenHu;