import React,{Component} from 'react';
import { Text, View,Button,TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';


export default class Test extends Component {

     handleFile(){
        console.log('click');
        
        // DocumentPicker.pick({
        //   type: [DocumentPicker.types.allFiles],
        // }).then((data)=>{

        //     console.log('result',data)
        // })
        console.log(DocumentPicker)

  
        // // Pick a single file
        //   try {
        //   console.log(
        //     res.uri,
        //     res.type, // mime type
        //     res.name,
        //     res.size
        //   );
        //   } catch (err) {
        //   if (DocumentPicker.isCancel(err)) {
        //     // User cancelled the picker, exit any dialogs or menus and move on
        //     console.log(err)
        //   } else {
        //     throw err;
        //   }
        //   }
        
  
  
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity 
             onPress={this.handleFile}>
    
            <Text >Post Page</Text>
            </TouchableOpacity>
    
    
            <Text>Hellow World8</Text>
    
            {/* <Button
              title="Go to About then"
              onPress={() => navigation.navigate('About')}
            /> */}
          </View>
        );
    }
}
