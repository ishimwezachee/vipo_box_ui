import { createStackNavigator } from 'react-navigation-stack';

import WelcomeHomeScreen from '../screens/welcomeHomeClientScreen';
import CourierClientDetailsHomeScreen from '../screens/courier_details';
import HomeCourierPaymentScreen from '../screens/payment/courier_details_payment';

const stackScreens = {
	Welcome: {
		screen: WelcomeHomeScreen
	},
	Details: {
		screen: CourierClientDetailsHomeScreen
	},
	Payment: {
		screen: HomeCourierPaymentScreen
	}
};

const HomeClientStack = createStackNavigator(stackScreens);

export default HomeClientStack;
