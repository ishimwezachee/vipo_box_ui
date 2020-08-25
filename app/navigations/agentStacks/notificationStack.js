import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import NotificationAgentScreen from '../../screens/Agent/NotificationScreen';

const stackScreens = {
	Notification: {
		screen: NotificationAgentScreen
	}
};

const NotificationAgentStack = createStackNavigator(stackScreens);

export default NotificationAgentStack;
