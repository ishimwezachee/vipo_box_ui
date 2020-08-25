import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import styles from './style';
const width = Dimensions.get('window').width;

const Button = ({ text, onPress, buttonStyle, textStyle }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[ styles.btnContainerStyle, buttonStyle ]}>
				<Text style={[ styles.btnTextStyle, textStyle ]}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Button;
