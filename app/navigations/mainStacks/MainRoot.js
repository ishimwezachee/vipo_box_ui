import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import VipoLandScreen from '../../screens/vipboxScreen';
import LandingScreen from '../../screens/landingScreen';
import MainAgentStack from '../../navigations/mainStacks/RootAgentNav';
import MainCollectionRootStack from '../../navigations/mainStacks/RootCollection';
import MainHomeRootStack from '../../navigations/mainStacks/RootHomeNav';

const MainRootNavigator = createStackNavigator({
	vipo: {
		screen: VipoLandScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	landing: {
		screen: LandingScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	MainAgent: {
		screen: MainAgentStack,
		navigationOptions: {
			headerShown: null
		}
	},
	MainCollection: {
		screen: MainCollectionRootStack,
		navigationOptions: {
			headerShown: null
		}
	},
	MainClient: {
		screen: MainHomeRootStack,
		navigationOptions: {
			headerShown: null
		}
	}
});

export default createAppContainer(MainRootNavigator);
