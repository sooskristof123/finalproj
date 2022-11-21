import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreenHu from './Screens/LoginScreenHu';
import MainScreenHu from './Screens/MainScreenHu';
import AccountScreenHu from './Screens/AccountScreenHu';
import RegistrationScreenHu from './Screens/RegistrationScreenHu';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="LoginHu" component={LoginScreenHu}  options={{headerShown: false}}/>
        <Stack.Screen name="MainHu" component={MainScreenHu}  options={{headerShown: false}}/>
        <Stack.Screen name="AccountHu" component={AccountScreenHu}  options={{headerShown: false}}/>
        <Stack.Screen name="RegistrationHu" component={RegistrationScreenHu}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
