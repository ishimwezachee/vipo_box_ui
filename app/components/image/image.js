import React from 'react';
import {Image,Text,View,StyleSheet} from 'react-native';

const FooterImage =({image,text})=>{
return(
    <View style={styles.container}>
        <Image
        style={styles.image}
            source={image}
        />
        <Text style={styles.text}>{text}</Text>
    </View>

)
}

const styles = StyleSheet.create({
    container:{
    alignItems:'center'
    },
    image:{
        width:30,
        height:30
    },
    text:{
        fontSize:12,
        // fontWeight:'bold'
    }
})
export default FooterImage