// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image } from 'react-native';
import {Homeroot} from './Views/Homeroot'
import {About} from './Views/About/About'
import logo from './Views/All_icon/logo.png'
// import * as firebase from 'firebase'
// import {firebaseConfig} from './Config'
const Stack = createStackNavigator();
// firebase.initializeApp(firebaseConfig);

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={logo}
    />
  );
}


export default function App() {


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Homeroot">
      <Stack.Screen name="Homeroot" component={Homeroot} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
      <Stack.Screen name="About" component={About}  />
      {/* <Stack.Screen name="chat" component={ChatScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}
