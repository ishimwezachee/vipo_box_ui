import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Header =({text})=>{
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    )
};

const styles= StyleSheet.create({
    headerStyle:{
      backgroundColor:'#000000',
      alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle:{
        color:"#fff",
        paddingVertical:35,
    }

})

export default Header;