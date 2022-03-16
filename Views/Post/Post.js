import * as React from 'react';
import { Text, View,Button} from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Test from './Test'


function SettingsScreen({navigation}) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Test/>
      </View>
    );
  }

  export {SettingsScreen}