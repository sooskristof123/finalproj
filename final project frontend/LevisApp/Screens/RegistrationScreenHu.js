import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth} from '../firebase';
import Lottie from 'lottie-react-native';
import axios from 'react-native-axios';
import {useNavigation} from '@react-navigation/native';
axios.defaults.withCredentials = true;

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function RegistrationScreenHu(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLoginLoading, setUserLoginLoading] = useState(false);

  const handlePressRegistration = async () => {
    setUserLoginLoading('true');
    const userCredentials = await auth.createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredentials.user;
    if (user) {
      try {
        const result = await axios.post(
          'https://5a15-5-204-98-9.eu.ngrok.io/api/usersapi',
          {
            uid: user.uid,
          },
        );
        if (result.status === 200) {
          setUserLoginLoading(false);
          console.log(user.uid);
          navigation.navigate('MainHu');
        } else {
          setUserLoginLoading(false);
        }
      } catch (error) {
        console.log('string', error);
      }
    }
  };

  if (userLoginLoading) {
    return (
      <View
        style={{
          width: screenWidth,
          height: screenHeight,
          backgroundColor: '#ececec',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Lottie
          source={require('../ScreenComponents/loadingAnimation.json')}
          autoPlay
          loop
          style={{height: 200, width: 80}}
        />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../img/bg3.jpeg')}
      resizeMode="cover"
      style={[styles.backgroundImage]}
      imageStyle={{opacity: 0.7}}>
      <Image
        source={require('../img/hu.png')}
        style={{
          width: 30,
          height: 20,
          position: 'absolute',
          top: 20,
          right: 20,
          borderRadius: 5,
        }}
      />
      <KeyboardAvoidingView style={[styles.view]}>
        <Image
          source={require('../img/logo2.png')}
          style={{width: 150, height: 150, resizeMode: 'contain'}}
        />
        <Text style={[styles.headline]}>Regisztrálj</Text>
        <View style={[styles.inputContainer]}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="envelope" />
          </View>
          <TextInput
            style={{flex: 10}}
            placeholder="Email"
            onChangeText={setEmail}></TextInput>
        </View>
        <View style={[styles.inputContainer]}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="lock" />
          </View>
          <TextInput
            style={{flex: 10}}
            placeholder="Jelszó"
            secureTextEntry
            onChangeText={setPassword}></TextInput>
        </View>
        <TouchableOpacity
          style={[styles.button]}
          onPress={handlePressRegistration}>
          <Text style={[styles.buttonText]}>Regisztráció</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default RegistrationScreenHu;

const styles = StyleSheet.create({
  backgroundImage: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(226,226,226, 0.8)',
    borderRadius: 10,
    marginBottom: 10,
    width: 300,
    height: 40,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'arial',
  },
  noAccountContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  headline: {
    fontSize: 40,
    marginBottom: 15,
    color: '#fafafa',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#fafafa',
    borderWidth: 1,
    width: 220,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fafafa',
    fontWeight: 'bold',
  },
});
