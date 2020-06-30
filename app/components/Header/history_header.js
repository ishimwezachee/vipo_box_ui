import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const History_header = ({textOne,textTwo,texThree})=>{
  
 return (
     <View style={styles.ViewStyle}>
         <Text style={styles.TextStyle}>{textOne}</Text>
         <Text style={styles.TextStyle}>{textTwo}</Text>
         <Text style={styles.TextStyle}>{texThree}</Text>
     </View>
 )
};

const styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    TextStyle:{
        paddingVertical:10
    }
   });
export default History_header;