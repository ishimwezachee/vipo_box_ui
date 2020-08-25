import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationRow from '../../components/NotificationRow/notificationRow';

const InTransit = () => {
	return (
		<View>
			<NotificationRow
				text="see you soon"
				style={styles.text}
				image={require('../../assets/images/blueBox.png')}
			/>
			<NotificationRow
				text="see you soon"
				style={styles.text}
				image={require('../../assets/images/blueBox.png')}
			/>
			<NotificationRow
				text="see you soon"
				style={styles.text}
				image={require('../../assets/images/blueBox.png')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: 'blue'
	}
});
export default InTransit;
