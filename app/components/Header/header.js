import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ text, style, styleText }) => {
	return (
		<View style={{ ...styles.headerStyle, ...style }}>
			<Text style={{ ...styles.textStyle, ...styleText }}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textStyle: {
		color: '#fff',
		paddingVertical: 35
	}
});

export default Header;
