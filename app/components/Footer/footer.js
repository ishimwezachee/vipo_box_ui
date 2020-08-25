import React from 'react';
import { View } from 'react-native';
import styles from './style';
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

export default Footer;
