import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../../screens/collection/HomeScreen';

const stackScreens = {
	Home: {
		screen: HomeScreen
	}
};

const HomeAgentStack = createStackNavigator(stackScreens);

export default createAppContainer(HomeAgentStack);
