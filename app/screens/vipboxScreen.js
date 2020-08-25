import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/color';

const Vipobox = ({ navigation }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('landing')}>
			<Image source={require('../assets/images/vipobox.png')} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.blue
	}
});

export default Vipobox;
