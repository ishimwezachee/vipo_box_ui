import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Header from '../components/Header/header';
import Footer from "../components/Footer/footer";
const Home_client_screen =()=>{
    const onPress =()=>{
        alert('clicked')
    }
    return(
      <View>
      <Header
          text='Home'
      />
     <TouchableOpacity style={styles.button}>
         <Text style={styles.text}>send a courier</Text>
     </TouchableOpacity>

     <Footer />
      </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#dcdcdc",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:150,
        marginHorizontal:20,
        justifyContent: 'center',
        alignItems:'center',
        height:120,
        borderRadius:20
    }
})


export default Home_client_screen;