import React, { useEffect, useState } from 'react';
import { StyleSheet,KeyboardAvoidingView,key,TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import { Content, ListItem,Footer, Left, Body, Right, Text,Thumbnail, Input, Icon, View ,Badge, Container} from 'native-base';
import handleFirebase from '../../Config';



const adminUrl = "https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg"

const maincomment =(list,index)=>{
  return (
  <View key={index}>
  <View style={styles.maincomment}>
       <Thumbnail source={{ uri: adminUrl }} style={styles.mainimage} />
     <View style={styles.mainbox}>
       <Text style={{color:'black',fontWeight:'600'}}>SKumar Pratik</Text>
       <Text note style={{color:'black'}}>{list.comment}</Text>
     </View>

 </View>
 <View style={styles.smallbox}>
     <View style={styles.smallerbox}>
     <Text>121 Likes</Text> 
     <Text style={styles.mainreply}>Reply</Text>
     </View>
 </View>
</View>
  )}
const subComment =(list,index)=>{
  return (
  <View key={index}>
        <View style={{marginLeft:'15%', flex:1,width:'85%', flexDirection:'row'}}>
                <Thumbnail source={{ uri: adminUrl }} style={{marginTop: 10,width:'20%'}} />
              <View style={{width:'75%', backgroundColor:'#6ba5f2',borderRadius:15,margin:10,padding:10, marginRight:"17%",alignItems:'flex-start'}}>
                <Text style={{color:'black',fontWeight:'600'}}>Kumar Pratik</Text>
                <Text note style={{color:'black'}}>{list.comment}</Text>
              </View>

          </View>
          <View style={{flex:1,width:'100%', flexDirection:'row'}}>
              <View style={{marginLeft:'35%', width:'65%',flexDirection:'row'}}>
              <Text>Likes</Text> 
              <Text style={{marginLeft:15}}>Reply</Text>
              </View>
          </View>
</View>
  )}

function ChatScreen() {
  const [text,setText] = useState('');
  const [commentData,setComment] = useState([]);
  const [isReply,setReply] = useState(true);
  const [tochange,setChange] = useState(false);

  
  
  const postComment = ()=>{
    console.log(text)
    const postHandle = handleFirebase.database().ref("comments").child("00002");
    postHandle.push().set({
      comment:text.text,
      time: Date.now(),
      userid: 12,
      isReply: isReply
      
    })
    setText({text:''})
    setChange(!tochange)
  }

  useEffect(()=>{
    const dataList = handleFirebase.database().ref("comments").child("00002");
    dataList.once("value",data=>{
    setComment(Object.values(data.val()))
     })
  },[tochange])

  // console.log(commentData)

  return (
    <Container style={{backgroundColor:'#e3e3e3',flex:1}}>  

    <Content>
      {commentData.map((list,index)=>{
           
          return list.isReply===false ? maincomment(list,index):subComment(list,index);

      }

 )} 
           {/* <View style={{marginLeft:'15%', flex:1,width:'85%', flexDirection:'row'}}>
                <Thumbnail source={{ uri: adminUrl }} style={{marginTop: 10,width:'20%'}} />
              <View style={{width:'75%', backgroundColor:'#6ba5f2',borderRadius:15,margin:10,padding:10, marginRight:"17%",alignItems:'flex-start'}}>
                <Text style={{color:'black',fontWeight:'600'}}>Kumar Pratik</Text>
                <Text note style={{color:'black'}}>ADoing what you like will always keep you happy Doing what you like
                 will always keep you happy Doing what you like will always keep you happy  . .</Text>
              </View>

          </View>
          <View style={{flex:1,width:'100%', flexDirection:'row'}}>
              <View style={{marginLeft:'35%', width:'65%',flexDirection:'row'}}>
              <Text>Likes</Text> 
              <Text style={{marginLeft:15}}>Reply</Text>
              </View>
          </View>

           <View style={styles.maincomment}>
                <Thumbnail source={{ uri: adminUrl }} style={styles.mainimage} />
              <View style={styles.mainbox}>
                <Text style={{color:'black',fontWeight:'600'}}>Kumar Pratik</Text>
                <Text note style={{color:'black'}}>ADoing what you like will always keep you happy Doing what you like
                 will always keep you happy Doing what you like will always keep you happy  . .</Text>
              </View>

          </View>
          <View style={styles.smallbox}>
              <View style={styles.smallerbox}>
              <Text>121 Likes</Text> 
              <Text style={styles.mainreply}>Reply</Text>
              </View>
          </View>

           <View style={{marginLeft:'15%', flex:1,width:'85%', flexDirection:'row'}}>
                <Thumbnail source={{ uri: adminUrl }} style={{marginTop: 10,width:'20%'}} />
              <View style={{width:'75%', backgroundColor:'#6ba5f2',borderRadius:15,margin:10,padding:10, marginRight:"17%",alignItems:'flex-start'}}>
                <Text style={{color:'black',fontWeight:'600'}}>Kumar Pratik</Text>
                <Text note style={{color:'black'}}>ADoing what you like will always keep you happy Doing what you like
                 will always keep you happy Doing what you like will always keep you happy  . .</Text>
              </View>

          </View>
          <View style={{flex:1,width:'100%', flexDirection:'row'}}>
              <View style={{marginLeft:'35%', width:'65%',flexDirection:'row'}}>
              <Text>Likes</Text> 
              <Text style={{marginLeft:15}}>Reply</Text>
              </View>
          </View> */}
    </Content>
  


{/* for post comment */}

          <Footer style={{backgroundColor:'#e3e3e3'}}>
            <View  style={styles.commentView}>
                <Thumbnail source={{uri: adminUrl }} style={{marginRight:10}} />
                <Input style={{backgroundColor:'transparent'}} 
                value={text.text}
                placeholder="write comment"
                onChangeText={(text)=>setText({text})}
                />

                <Icon type="FontAwesome" name="paper-plane" 
                style={styles.sendButton} 
                onPress={postComment}
                />
               </View>
          </Footer>
   </Container>
  );
}

const styles = StyleSheet.create({

  //main comment
  maincomment:{
    // flex:1,
    width:'100%', 
    flexDirection:'row'
  },
  mainimage:{
    marginTop: 10,
    width:'15%'
  },
  mainbox:{
    width:'80%', 
    backgroundColor:'#6ba5f2',
    borderRadius:15,
    margin:10,
    padding:10, 
    marginRight:"17%",
    alignItems:'flex-start'
  },
  smallbox:{
    // flex:1,
    width:'100%', 
    flexDirection:'row'
  },
  smallerbox:{
    marginLeft:'20%', 
    width:'80%',
    flexDirection:'row'
  },
  mainlikes:{

  },
  mainreply:{
    marginLeft:15
  },






  commentView:{
    backgroundColor:'white',
    width:'98%',
    flexDirection:'row',
    borderRadius:20
  },
  sendButton: {
    fontSize: 30, 
    color: '#318fe0',
    marginTop:15,
    marginRight:10
  },
})

export  {ChatScreen};