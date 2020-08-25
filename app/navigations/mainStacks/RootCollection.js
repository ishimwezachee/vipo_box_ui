import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CreateAcountStack from '../CollectionStack/createAccountCollectionStack';
import RootBottomNavigatorStack from '../CollectionStack/bottomCollectionStack';

const MainRootNavigator = createStackNavigator({
	Acount: {
		screen: CreateAcountStack,
		navigationOptions: {
			header: null
		}
	},
	BottomNavCollection: {
		screen: RootBottomNavigatorStack,
		navigationOptions: {
			header: null
		}
	}
});

export default MainRootNavigator;
