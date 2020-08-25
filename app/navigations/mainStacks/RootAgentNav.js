import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CreateAcountStack from '../agentStacks/createAccountAgetStack';
import RootBottomNavigatorStack from '../agentStacks/bottomAgentStack';

const MainRootNavigator = createStackNavigator({
	Acount: {
		screen: CreateAcountStack,
		navigationOptions: {
			header: null
		}
	},
	BottomNavAgent: {
		screen: RootBottomNavigatorStack,
		navigationOptions: {
			header: null
		}
	}
});

export default MainRootNavigator;
