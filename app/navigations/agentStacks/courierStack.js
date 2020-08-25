import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CourierAgentScreen from '../../screens/Agent/AgentCourierScreen';

const stackScreens = {
	Courier: {
		screen: CourierAgentScreen
	}
};

const CourierAgentStack = createStackNavigator(stackScreens);

export default CourierAgentStack;
