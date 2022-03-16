import  React, {useEffect , useState} from 'react';
import { Image,View,StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text,Button, Icon, Left, Body, Right } from 'native-base';
import handleFirebase from '../../Config'
import { Ionicons } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';
import Likes from './Likes'


function Home() {
  const [postData,setPost] = useState([]);
  const [loading,setLoading] = useState(true);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


 const  loadingFont =  async()=> {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
   setLoading(false)
  }

  
  useEffect(()=>{
    loadingFont();
    const myposts = handleFirebase.database().ref("posts");
          myposts.on("value",data=>{
            setPost(data.val())
          // console.log('firebase obj',data.val())
           })

  },[])
 
  if (loading) {
    return <View></View>
   
  }
  else
    return (
      <Container>
      
      <Content>
        {postData.map((list,index)=>(
        
        <Card key={index}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: list.profile}} />
                <Body>
                  <Text>{list.title}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {list.image.length>0 && <Image source={{uri: list.image}} style={{height: 200, width: null, flex: 1}}/> }
            </CardItem>
            <CardItem>
           {list.video.length>0 && <Video
              ref={video}
              style={{height: 200, width: null, flex: 1}}
              source={{
                uri: list.video,
              }}
              useNativeControls
              shouldPlay
              resizeMode="contain"
              isLooping
              onPress={() =>   status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()  }
              onPlaybackStatusUpdate={status =>   setStatus(() => status )}
              /> }
            </CardItem> 
            <CardItem >
              <Body>
                <Text>
                 {list.description}
                </Text>
              </Body>
            </CardItem>
         <CardItem>
              <Left>
                <Button transparent>
                  {/* <Icon active name="thumbs-up" /> */}
                  {/* <Text>12 Likes</Text>
                   */}
                   <Likes/>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>

          </Card>
          ))}
        </Content>
  </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Home}

