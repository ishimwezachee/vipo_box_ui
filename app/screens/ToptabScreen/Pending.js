import React from 'react';
import { View } from 'react-native';
import NotificationRow from '../../components/NotificationRow/notificationRow';

const Pending = () => {
	return (
		<View>
			<NotificationRow text="Approval" image={require('../../assets/images/victor.png')} />
			<NotificationRow text="Approval" image={require('../../assets/images/victor.png')} />
			<NotificationRow text="Approval" image={require('../../assets/images/victor.png')} />
		</View>
	);
};

export default Pending;
