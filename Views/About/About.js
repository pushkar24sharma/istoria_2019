import * as React from 'react';
import { Text, View,Button} from 'react-native';


function About({navigation}) {
  // console.log('home',navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Page!</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Homeroot')}
      />
    </View>
  );
}


export {About}