import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Header from "../components/Header/header";
import {RowSeparator} from '../components/RowItem/Text-image';
import EditProfileInput from '../components/Input/textInput';


const Edit_Profile = ()=>{
    return (
        <View>
         <ScrollView >
        <View style={styles.container}>
            <Header
            text='Edit Profile'
        />
       </View>
        <View style={styles.edit}>
        <Text style={styles.textstyle}>Personal</Text>
       <Text style={styles.editText}>Edit</Text>
        </View>
        <RowSeparator/>
        <View style={styles.profile}>
          <EditProfileInput />
        </View>
        </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginBottom:30
    },
    textstyle:{
       color:'grey',
       fontSize:14,
       marginLeft:10
    },
    edit:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    editText:{
       color:'blue' ,
       marginRight:10
    },
     input:{
    backgroundColor:'white',
    marginVertical: 2,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 4,
    width:'40%'
    },
    text:{
        marginHorizontal: 20,
    },

    profile:{
    // flexDirection: 'row'
    }
})

export default Edit_Profile;