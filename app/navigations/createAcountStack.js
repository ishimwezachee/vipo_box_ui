import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import signupScreenOne from '../screens/signUp/signUpScreen1';
import signupScreenTwo from '../screens/signUp/signUpScreen2';
import signupScreenThree from '../screens/signUp/signUpScreen3';
import LoginClientScreen from '../screens/Login/Login_client';

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

export default CreateAcountStack;
