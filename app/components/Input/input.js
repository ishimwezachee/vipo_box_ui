import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const DataInput = ({ text, value, textStyles, InputStyles, ViewStyle, placeholder }) => {
	return (
		<View style={ViewStyle}>
			<Text style={textStyles}>{text}</Text>
			<TextInput style={InputStyles} placeholder={placeholder} />
		</View>
	);
};

export default DataInput;
