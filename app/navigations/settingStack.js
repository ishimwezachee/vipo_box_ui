import { createStackNavigator } from 'react-navigation-stack';

import SettingClientScreen from '../screens/setting_client';
import EditProfileScreen from '../screens/edit_profile';
import ManageVipoScreen from '../screens/settingManagevipoScreen';

const stackScreens = {
	Setting: {
		screen: SettingClientScreen
	},
	Profile: {
		screen: EditProfileScreen
	},
	Manage: {
		screen: ManageVipoScreen
	}
};

const NotificationClientStack = createStackNavigator(stackScreens);

export default NotificationClientStack;
