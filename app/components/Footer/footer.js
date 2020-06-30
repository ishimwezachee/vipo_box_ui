import React from 'react';
import { View, StyleSheet } from 'react-native';

import Image from '../image/image';

const Footer = ({ footerStyle }) => {
	return (
		<View style={[ styles.container, footerStyle ]}>
			<Image image={require('../../assets/images/homeButton.png')} text="Home" />
			<Image image={require('../../assets/images/box.png')} text="Courier" />
			<Image image={require('../../assets/images/notifications.png')} text="Notification" />
			<Image image={require('../../assets/images/settings.png')} text="settings" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		backgroundColor: '#F2F2F2'
		//    marginTop:'45%',
		//    marginHorizontal:20,
	}
});
export default Footer;
