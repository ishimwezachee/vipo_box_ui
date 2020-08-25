import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CourierScreen from '../../screens/collection/courierHistory';

const stackScreens = {
	Home: {
		screen: CourierScreen
	}
};

const CourierAgentStack = createStackNavigator(stackScreens);

export default createAppContainer(CourierAgentStack);
