import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Image, Text, TouchableOpacity, View } from 'react-native';
import {auth} from '../firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <Image source = {require('../img/logo.png')} style = {{width: 150, height: 150}} />
            <Text style = {[styles.headline]}>Lépj be</Text>
            <View style = {[styles.inputContainer]}>
                <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                    <Icon name = "envelope" />
                </View>
                <TextInput style = {{...styles.input, flex : 10}} placeholder='Email' onChangeText={setEmail}></TextInput> 
            </View>
            <View style = {[styles.inputContainer]}>
                <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                    <Icon name = "lock"/>
                </View>
                <TextInput style = {{...styles.input, flex : 10}} placeholder='Jelszó' secureTextEntry onChangeText={setPassword}></TextInput>
            </View>
            <TouchableOpacity style = {[styles.button]} onPress = {handlePressLogin}>
                <Text style = {[styles.buttonText]} >Belépés</Text>
            </TouchableOpacity>
            <View style = {[styles.noAccountContainer]}>
                <Text>Még nincs felhasználód?</Text>
                <TouchableOpacity style = {{marginLeft : 5}}>
                    <Text style = {{color : '#8e0000'}}>Regisztrálj</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'rgba(226,226,226, 0.8)',
        borderRadius : 10,
        marginBottom : 10,
        width : 300,
        height : 40
    },
    view : {
        backgroundColor : '#eceff1',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        fontFamily : 'arial'
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