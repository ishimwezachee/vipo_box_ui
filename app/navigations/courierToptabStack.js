import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

import PendingScreen from '../screens/ToptabScreen/Pending';
import InTransitScreen from '../screens/ToptabScreen/InTrannsit';
import ArchiveScreen from '../screens/ToptabScreen/Archive';
import Colors from '../constants/color.js';

const stackScreens = {
	Archive: {
		screen: ArchiveScreen
	},
	Pending: {
		screen: PendingScreen
	},
	InTransit: {
		screen: InTransitScreen
	}
};

const TopCourierNavigation = createMaterialTopTabNavigator(stackScreens, {
	tabBarOptions: {
		labelStyle: {
			color: Colors.black
		},
		style: {
			backgroundColor: Colors.lightGrey
		}
	}
});

export default TopCourierNavigation;
