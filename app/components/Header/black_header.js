import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Black_header = ({text})=>{
    return(
        <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>{text}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    headerStyle:{
    backgroundColor:"#D2D2D2",
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle:{
        color:"#000",
        paddingVertical:6,
    }

})

export default Black_header;