import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SettingAgentScreen from '../../screens/Agent/SettingScreen';
import EditProfile from '../../screens/Agent/EditProfile';

const stackScreens = {
	Setting: {
		screen: SettingAgentScreen
	},
	Edit: {
		screen: EditProfile
	}
};

const SettingAgentStack = createStackNavigator(stackScreens);

export default SettingAgentStack;
