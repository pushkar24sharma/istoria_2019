import React, { useEffect, useState } from 'react';
import {Icon, Text, View} from 'native-base';
import handleFirebase from '../../Config';


const adminUrl = "https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg"
function Likes(props) {
const [tochange,setChange] = useState(false)
const [like,setLike] = useState(false)
const [number,setNumber] = useState(0);
const [likeid,setLikeId] = useState("")

const likeHandle = ()=>{
    const postid = '00002';
    // var likeid = '-MWwfJVN8fVpu89Yg0hp'
    if(like == false){
        const newLikeId = handleFirebase.database().ref("likes").child("00002").push().key;
        const  postData = {
            userid: 12,
            name: 'ravi',
            bio:'for test',
            profile:adminUrl
            }
            var updates = {};
            updates['/likes/' + postid + '/' + newLikeId] = postData;
            handleFirebase.database().ref().update(updates);
            setLike(!like)
            setChange(!tochange);
            setLikeId(newLikeId);

    }
    else if(like == true){
        const reqVal = handleFirebase.database().ref('likes/'+postid+'/'+likeid);
        reqVal.remove(data=>{
            setLikeId("")
        })
        setLike(!like);
        setChange(!tochange);

    }

}
      useEffect(()=>{
        const dataList = handleFirebase.database().ref("likes").child("00002");
        dataList.once("value",data=>{
        var length = Object.values(data.val()).length
        setNumber(length)
         }) 

      },[tochange])

    return (
        <View style={{flexDirection:'row'}}>
             <Text>{number}</Text> 
            {like===false &&  <Icon type="FontAwesome" name="heart" style={{marginLeft:10}} onPress={likeHandle} /> }
            {like===true &&  <Icon type="FontAwesome" name="heart" style={{color:'#f5190a',marginLeft:10}}  onPress={likeHandle} /> }
            
        </View>
    );
}

export default Likes;