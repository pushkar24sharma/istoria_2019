// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons,FontAwesome,Entypo,AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from './Home/Home'
import {SettingsScreen} from './Post/Post'
import {ChatScreen} from './chat/chat'



const Tab = createBottomTabNavigator();

function Homeroot() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              return <FontAwesome name="home" size={24} color="#10bee6" />;
            } else if (route.name === 'Post') {

              return <AntDesign name="pluscircle" size={30} color="#10bee6" />;
            }
             else if (route.name === 'chat') {
              // iconName = focused ? 'ios-list-box' : 'ios-list';
              return <Entypo name="chat" size={24} color="#10bee6" />;
            }

            // You can return any component that you like here!
           
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Post" component={SettingsScreen} options={{title:'Add Post'}} />
        <Tab.Screen name="chat" component={ChatScreen} />
        
      </Tab.Navigator>
  );
}

export {Homeroot}