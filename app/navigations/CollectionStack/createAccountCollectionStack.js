import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import signupScreenOne from '../../screens/collection/Account/signUpcollectionScreen1';
import signupScreenTwo from '../../screens/collection/Account/signUpcollectionScreen2';
import signupScreenThree from '../../screens/collection/Account/signUpCollectionScreen3';
import LoginClientScreen from '../../screens/collection/Account/Login_collection';

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
