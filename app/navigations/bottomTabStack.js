import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import the stacks
import HomeClientStack from './HomeClientStack';
import NotificationClientStack from './NotificationStack';
import SettingClientStack from './settingStack';
import CourierClientStack from './courierToptabStack';
import Colors from '../constants/color';

const RootBottomNavigator = createMaterialBottomTabNavigator({
	Home: {
		screen: HomeClientStack,
		navigationOptions: {
			tabBarIcon: () => {
				return <AntDesign name="home" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Home</Text>
		}
	},

	Courier: {
		screen: CourierClientStack,

		navigationOptions: {
			tabBarIcon: () => {
				return <Feather name="package" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Courier</Text>
		}
	},

	Notification: {
		screen: NotificationClientStack,
		navigationOptions: {
			tabBarIcon: () => {
				return <Ionicons name="md-notifications-outline" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Notification</Text>
		}
	},

	Setting: {
		screen: SettingClientStack,
		navigationOptions: {
			tabBarIcon: () => {
				return <Feather name="settings" size={25} color="#494b4f" />;
			},
			tabBarColor: '#9d9fa1',
			tabBarLabel: <Text style={{ color: 'black' }}>Settings</Text>
		}
	}
});

export default RootBottomNavigator;
