import React from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Card from '../ScreenComponents/Card';
import Footer from '../ScreenComponents/Footer';
import Header from '../ScreenComponents/Header';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function MainScreenHu(props) {
    return (
        <ImageBackground source = {require('../img/bg2.jpeg')} imageStyle = {{opacity : 0.6}}>
            <View style = {[styles.mainContainer]}>
                <View style = {[styles.headerContainer]}>
                    <Header />
                </View>
                <View style = {[styles.body]}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </View>
                <View style = {[styles.footerContainer]}>
                    <Footer />
                </View>
            </View>
        </ImageBackground>
    );
}

export default MainScreenHu;

const styles = StyleSheet.create({
    mainContainer : {
        height: screenHeight,
        width: screenWidth,
        alignItems : 'center',
        justifyContent : 'center',
    },
    footerContainer : {
        position : 'absolute',
        bottom : 0,
    },
    body : {
        flexDirection : 'row',
        width : screenWidth,
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        top : 50
    },
    headerContainer : {
        position : 'absolute',
        top : 0
    }
});