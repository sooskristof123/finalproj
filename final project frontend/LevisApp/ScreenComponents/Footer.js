import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const screenWidth = Dimensions.get('window').width;

function Footer(props) {
    return (
        <View style = {[styles.footer]}>
            <Icon name = 'user' size = {30} style = {{flex : 1}}/>
            <Icon name = 'home' size = {30} style = {{flex : 1}}/>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer : {
        width : screenWidth,
        backgroundColor : '#fafafa',
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row'
    }
    }
);