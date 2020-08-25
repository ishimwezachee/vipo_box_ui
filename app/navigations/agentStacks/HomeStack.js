import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../../screens/Agent/AgentWelcomeScreen';
import ScanModalScreen from '../../screens/Agent/scanModalScreen';
import PayModalScreen from '../../screens/Agent/paymentModal';

const stackScreens = {
	Home: {
		screen: HomeScreen
	},
	Modal: {
		screen: ScanModalScreen
	},
	Payment: {
		screen: PayModalScreen
	}
};

const HomeAgentStack = createStackNavigator(stackScreens);

export default HomeAgentStack;
