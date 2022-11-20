import React from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
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
                <Text>picsa</Text>
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
    headerContainer : {
        position : 'absolute',
        top : 0
    }
});