import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import NotificationScreen from '../../screens/collection/NotificationScreen';

const stackScreens = {
	Home: {
		screen: NotificationScreen
	}
};

const NotificationStack = createStackNavigator(stackScreens);

export default createAppContainer(NotificationStack);
