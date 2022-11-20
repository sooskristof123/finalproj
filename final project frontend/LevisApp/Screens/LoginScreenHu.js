import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Image, Text, TouchableOpacity, View, ImageBackground, Dimensions } from 'react-native';
import {auth} from '../firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function LoginScreenHu(props) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //handling login button press
    const handlePressLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                if (user) {
                    navigation.navigate('MainHu');
                }
            })
        .catch(error => alert(error.message));
    };
    return (
        <ImageBackground source = {require('../img/bg3.jpeg')} resizeMode = 'cover' style = {[styles.backgroundImage]} imageStyle = {{opacity : 0.7}}>
            <Image source =  {require('../img/hu.png')} style = {{width : 30, height : 20, position : 'absolute', top : 20, right : 20, borderRadius : 5}}/>
            <KeyboardAvoidingView style = {[styles.view]}>
                <Image source = {require('../img/logo2.png')} style = {{width: 150, height: 150, resizeMode : 'contain'}}/>
                <Text style = {[styles.headline]}>Lépj be</Text>
                <View style = {[styles.inputContainer]}>
                    <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                        <Icon name = "envelope" />
                    </View>
                    <TextInput style = {{flex : 10}} placeholder='Email' onChangeText={setEmail}></TextInput> 
                </View>
                <View style = {[styles.inputContainer]}>
                    <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                        <Icon name = "lock"/>
                    </View>
                    <TextInput style = {{flex : 10}} placeholder='Jelszó' secureTextEntry onChangeText={setPassword}></TextInput>
                </View>
                <TouchableOpacity style = {[styles.button]} onPress = {handlePressLogin}>
                    <Text style = {[styles.buttonText]} >Belépés</Text>
                </TouchableOpacity>
                <View style = {[styles.noAccountContainer]}>
                    <Text style = {{ color : '#fafafa', fontWeight : 'bold'}}>Még nincs felhasználód?</Text>
                    <TouchableOpacity style = {{marginLeft : 5}}>
                        <Text style = {{color : '#8e0000', fontWeight : 'bold'}}>Regisztrálj</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage : {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
        color : '#fafafa',
        fontWeight : 'bold'
    },
    button : {
        marginTop : 20,
        alignItems : 'center',
        borderRadius : 20,
        borderColor : '#fafafa',
        borderWidth : 1,
        width : 220,
        paddingTop : 5,
        paddingBottom : 5
    },
    buttonText : {
        fontSize : 20,
        color : '#fafafa',
        fontWeight : 'bold'
    }
});

export default LoginScreenHu;