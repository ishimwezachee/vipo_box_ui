import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import signupScreenOne from '../../screens/Agent/account/signUpAgentScreen1';
import signupScreenTwo from '../../screens/Agent/account/signUpAgentScreen2';
import signupScreenThree from '../../screens/Agent/account/signUpAgentScreen3';
import LoginClientScreen from '../../screens/Agent/account/Login_agent';

const stackScreens = {
	Login: {
		screen: LoginClientScreen
	},
	SignupOne: {
		screen: signupScreenOne
	},
	SignupuTwo: {
		screen: signupScreenTwo
	},
	SignUpThree: {
		screen: signupScreenThree
	}
};

const CreateAcountStack = createStackNavigator(stackScreens);

export default createAppContainer(CreateAcountStack);
