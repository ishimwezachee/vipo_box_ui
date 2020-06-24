import React from "react";
import {Text,View,TouchableOpacity,Dimensions,StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;


const Button  = ({text,onPress, buttonStyle})=>{
	return (
      <TouchableOpacity onPress={onPress}>
		  <View style={[styles.btnContainerStyle,buttonStyle]}>
			  <Text style={styles.btnTextStyle}>{text}</Text>
		  </View>
	  </TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btnContainerStyle:{
	 backgroundColor:'#3F51B5',
	 paddingVertical:10,
	 borderRadius:5,
	 marginHorizontal:6,
	 paddingHorizontal:4,
	 
	},
	btnTextStyle:{
		color: '#ffffff',
		paddingHorizontal:5,
		fontSize: 14,
		textAlign: 'center',
		fontFamily: 'Quicksand-Medium'	

	}
});

export default Button