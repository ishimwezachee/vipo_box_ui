import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CreateAcountStack from '../createAcountStack';
import RootBottomNavigatorStack from '../bottomTabStack';

const MainRootNavigator = createStackNavigator({
	Acount: {
		screen: CreateAcountStack,
		navigationOptions: {
			header: null
		}
	},
	BottomNav: {
		screen: RootBottomNavigatorStack,
		navigationOptions: {
			header: null
		}
	}
});

export default MainRootNavigator;
