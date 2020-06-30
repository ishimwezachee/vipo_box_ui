import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView} from 'react-native';
import Header from '../components/Header/header';
import History_header from '../components/Header/history_header';
import Input from '../components/Input/input';
import Image_text from '../components/Text/text_image_history'
import {RowSeparator} from '../components/RowItem/Text-image';
import Footer from '../components/Footer/footer';



const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'grey',
        borderRadius:20,
        height:34,
        marginHorizontal:30,
        position:'relative'
    },
    image:{
          width:20,
          height:20,
          position:'absolute',
          top:154,
          left:290
    }
})

const CurrierHistory = ()=>{
 return (
     <View>
       <ScrollView>
       <Header
            text='Corrier History'
        />
        <History_header
            textOne='Sent'
            textTwo="Received"
            texThree="In Transit"
        />
        <Input
            InputStyles={styles.input}
        />
        <Image
            style={styles.image}
            source={require('../assets/images/search.png')}
        />
       <Image_text/>
       <RowSeparator/>
       <Image_text/>
       <RowSeparator/>
       <Image_text/>
       <Footer/>
       </ScrollView>
     </View>

 )
}

export default CurrierHistory;