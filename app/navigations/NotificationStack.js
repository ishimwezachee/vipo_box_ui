import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NotificationClientScreen from '../screens/NotificationClient';
import MapViewScreen from '../screens/notifictationMapView';

const stackScreens = {
	Notification: {
		screen: NotificationClientScreen
	},
	Map: {
		screen: MapViewScreen
	}
};

const NotificationClientStack = createStackNavigator(stackScreens);

export default NotificationClientStack;
