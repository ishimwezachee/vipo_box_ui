import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from '../components/Header/header';
import OptionsInput from '../components/Input/options_input';
import Input from '../components/Input/input';
import Button from '../components/Button/button'
import {RowSeparator} from '../components/RowItem/Text-image';
import Footer from '../components/Footer/footer'


const PaymentDetail = ()=>{
    return(
        <View>
            <Header
                text='Payment'
            />
            <OptionsInput
            text='Payment by'
            ViewStyle={styles.InputView}
            TextStyle={styles.paymentBy}
            InputStyles={styles.picker}
        />
        <Input 
            text='Phone Number'
            InputStyles={styles.input}
            ViewStyle={styles.viewRow}
           textStyles={styles.phonumber}
        />
        <Input 
            text='Amount'
            InputStyles={styles.input}
            ViewStyle={styles.viewRow}
           textStyles={styles.amount}
        />
        <Button 
            text='SEND'
            buttonStyle={styles.button}
        />
        <RowSeparator/>
       <View style={styles.textView}>
       <Text style={styles.textOne}>The amount above will be declined from your MTVN mobile money or </Text>
        <Text style={styles.textOne}>Airtel money.if you have any quetionss please contact Us.</Text>
       </View>
       <Footer/>
        </View>
    )
}
 

const styles = StyleSheet.create({
    InputView:{
        flexDirection: 'row',
        marginTop:40,
        marginBottom:10,
        width: 500,
        height:40,

     },
    optionText:{
        margin: 10
    },
    paymentBy:{
        margin:10,
        marginRight:23
    },
    picker:{
        borderWidth:1,
        width:'47%',  
        borderRadius:16
       },
    viewRow:{
        flexDirection: 'row',
        marginBottom:10,
        },
    input:{
           borderWidth:1,
           width: "65%",
           height:40,
           borderRadius:13,
           justifyContent:'center',
           alignItems: 'center'
        },
        phonumber:{
            margin:10
        },
        amount:{
            margin:10,
            marginRight:50
        },
    button:{
           marginLeft: 110,
           marginRight:20,
           borderRadius:10,
           marginBottom:20
        },
        textOne:{
            fontSize:11,
            color:'grey',
           textAlign:'center'
        },
        textView:{
            marginBottom:138
        }
       

 });

export default PaymentDetail;