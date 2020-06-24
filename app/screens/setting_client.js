import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Black_header from '../components/Header/black_header';
import Main_header from '../components/Header/header';
import {Image_text,RowSeparator} from '../components/RowItem/Text-image';
import Footer from '../components/Footer/footer'

const SettingClient_screen = ()=>{

return (
    <View>
    <View style={Styles.rows}>
        <Main_header
            text ='Settings'
        />
        <Black_header
            text='client Account'
        />
    <Image_text
        text="Edit Profile"
        image ={require('../assets/images/setting_client/user.png')}
    />
    <RowSeparator/>
    <Image_text
        text="Manage your VIPO BOX"
        image ={require('../assets/images/setting_client/process.png')}
    />
    <RowSeparator/>
    <Image_text
        text="wallet"
        image ={require('../assets/images/setting_client/wallet.png')}
    />
    <RowSeparator/>
    <Image_text
        text="Sign out of the box"
        image ={require('../assets/images/setting_client/power.png')}
    />
    <RowSeparator/>
    </View>
    <Footer/>
    </View>
)
}

const Styles = StyleSheet.create({
    rows:{
        marginBottom:78
    }

})

export default SettingClient_screen;