import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SettingScreen from '../../screens/collection/settingcollectionScreen';

const stackScreens = {
	Home: {
		screen: SettingScreen
	}
};

const SettingStack = createStackNavigator(stackScreens);

export default createAppContainer(SettingStack);
