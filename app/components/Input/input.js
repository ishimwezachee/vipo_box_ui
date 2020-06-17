import React from "react";
import {TextInput,View,StyleSheet,Text} from 'react-native';

const styles = StyleSheet.create({
    container:{

    },
    text:{
        marginHorizontal: 20,
    },
    input:{
    backgroundColor:'#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    }
});

const DataInput = ({text,value})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default DataInput;