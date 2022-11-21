import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const screenWidth = Dimensions.get('window').width;

function Footer(props) {
    const navigation = useNavigation();
    const handleHomePress = () => {
        navigation.navigate('MainHu');
    }

    const handleAccountPress = () => {
        navigation.navigate('AccountHu');
    }

    return (
        <View style = {[styles.footer]}>
            <View style = {[styles.icon]} >
                <Icon name = 'home' size = {30} style = {{flex : 1}} onPress = {handleHomePress}/>
            </View>
            <View style = {[styles.icon]}>
                <Icon name = 'book' size = {30} style = {{flex : 1}}/>
            </View>
            <View style = {[styles.icon]}>
                <Icon name = 'credit-card' size = {30} style = {{flex : 1}} color = '#c20000'/>
            </View>
            <View style = {[styles.icon]}>
                <Icon name = 'heart' size = {30} style = {{flex : 1}}/>
            </View>
            <View style = {[styles.icon]}>
                <Icon name = 'user' size = {30} style = {{flex : 1}} onPress = {handleAccountPress}/>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer : {
        width : screenWidth,
        backgroundColor : '#fafafa',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row'
    },
    icon : {
        flex : 1,
        padding : 15,
        justifyContent : 'center',
        alignItems : 'center'
    }
    }
);