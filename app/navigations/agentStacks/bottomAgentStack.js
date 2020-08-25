import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import the stacks
import HomeAgentStack from './HomeStack';
import NotificationAgentStack from './notificationStack';
import SettingAgentStack from './SettingStack';
import CourierAgentStack from './courierStack';
import Colors from '../../constants/color';

const RootBottomAgentNavigator = createMaterialBottomTabNavigator({
	Home: {
		screen: HomeAgentStack,
		navigationOptions: {
			tabBarIcon: () => {
				return <AntDesign name="home" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Home</Text>
		}
	},

	Courier: {
		screen: CourierAgentStack,

		navigationOptions: {
			tabBarIcon: () => {
				return <Feather name="package" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Courier</Text>
		}
	},

	Notification: {
		screen: NotificationAgentStack,
		navigationOptions: {
			tabBarIcon: () => {
				return <Ionicons name="md-notifications-outline" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Notification</Text>
		}
	},

	Setting: {
		screen: SettingAgentStack,
		navigationOptions: {
			tabBarIcon: () => {
				return <Feather name="settings" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Settings</Text>
		}
	}
});

export default RootBottomAgentNavigator;
