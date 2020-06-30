import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:20
    },
    imageContainer:{
      backgroundColor:'grey',
      borderRadius:120,
      padding:13,
      marginRight:20
    },
    text:{
        fontSize:12
    }
})
const Text_image = ({text})=>{
    return(
        <View style={styles.container}>
         <View style={styles.imageContainer}>
         <Image
           style={styles.image}
           source={require('../../assets/images/setting_client/wallet.png')}
           />
         </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Courier ID:VI001-050620</Text>
                <Text  style={styles.text}>Receiver:Dukundane Eric</Text>
                <Text  style={styles.text}>Agent:Hakiziman charles</Text>
                <Text style={styles.text}>Collection Point:Kacyiru</Text>
                <Text style={styles.text}>Date:12/6/2020/15:37</Text>
            </View>
        </View>
    )
}

export default Text_image;

