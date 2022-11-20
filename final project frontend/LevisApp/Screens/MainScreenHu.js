import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Footer from '../ScreenComponents/Footer';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function MainScreenHu(props) {
    return (
        <View style = {[styles.mainContainer]}>
            <Text>picsa</Text>
            <View style = {[styles.footerContainer]}>
                <Footer />
            </View>
        </View>
        
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
    }
    }
);