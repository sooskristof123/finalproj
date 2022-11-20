import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const screenWidth = Dimensions.get('window').width;

function Header(props) {
    return (
        <View style = {[styles.view]}>
            <View style = {{position : 'absolute', left : 10}}>
                <Icon name = 'sign-out' size = {20}/>
            </View>
            <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Image source = {require('../img/logo2.png')} style = {{width : 100, height : 40}}/>   
            </View> 
            
            <View style = {{position : 'absolute', right : 10}}>
                <Icon name = 'search' size = {20}/>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    view : {
        justifyContent : 'center',
        alignItems : 'center',
        height : 50,
        width : screenWidth,
        backgroundColor : '#fafafa',
        padding : 5,
        flexDirection : 'row'
    }
});