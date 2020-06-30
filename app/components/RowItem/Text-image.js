import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native';
export const  Image_text = ({text,onPress,image})=>{

return (
    <View style={styles.container}>
       <Image
           style={styles.image}
           source={image}
       />
       <Text style={styles.text}>{text}</Text>
    </View>
)
  }  

export const RowSeparator = ()=> <View style={styles.separator}/>

const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin:20,
        paddingVertical: 10,
    },
    image:{
       width:25,
       height:25,
    },
    text:{
        fontSize:15,
        marginLeft:20
    },
    separator: {
        backgroundColor:'gray',
        height: StyleSheet.hairlineWidth,
        marginLeft: 10,
        marginRight:10,
        marginBottom:15
      },


})



