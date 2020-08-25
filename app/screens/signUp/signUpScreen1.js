import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import colors from '../../constants/color';
import Input from '../../components/Input/input';
import InputOption from '../../components/Input/options_input';
import { RowSeparator } from '../../components/RowItem/settingImage-Text';

const SignupScreenOne = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.headerElements}>
				<View style={styles.textView}>
					<Text style={styles.text}>Create your Vipo Box</Text>
				</View>
				<View style={styles.buttonText}>
					<Text style={styles.textsmall}>Have a box? Login</Text>
					<Button
						text="Login"
						onPress={() => navigation.navigate('Login')}
						buttonStyle={styles.buttonOne}
						textStyle={styles.textStyleone}
					/>
				</View>
			</View>
			<View>
				<Text style={styles.personal}>Personal</Text>
				<RowSeparator />
			</View>
			<View style={styles.Inputs}>
				<InputOption
					text="AccountType"
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<Input
					text="Names"
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>
				<Input
					text="National ID"
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<Input
					text="Phone"
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<Input
					text="Email"
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>
			</View>

			<View style={styles.buttonView}>
				<Button
					text="Next"
					buttonStyle={styles.buttonTwo}
					textStyle={styles.textTwo}
					onPress={() => navigation.navigate('SignupuTwo')}
				/>
			</View>
		</View>
	);
};

SignupScreenOne.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	container: {},
	buttonText: {},
	headerElements: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: colors.headerColor,
		paddingVertical: 15
	},
	buttonOne: {
		paddingVertical: 5,
		paddingHorizontal: 7,
		backgroundColor: colors.white
	},
	textStyleone: {
		color: colors.headerColor
	},
	text: {
		fontSize: 20,
		color: colors.white,
		marginTop: 15
	},
	textsmall: {
		color: colors.white,
		marginBottom: 3
	},
	InputStyles: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: '60%'
	},
	ViewStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 5
	},
	TextStyle: {
		marginTop: 15
	},
	buttonTwo: {
		backgroundColor: colors.headerColor,
		width: 220,
		justifyContent: 'space-between'
	},
	buttonView: {
		marginTop: '10%',
		marginLeft: '30%'
	},
	textTwo: {
		color: colors.white
	},
	personal: {
		marginTop: 25,
		marginLeft: 10,
		fontSize: 17,
		fontWeight: 'bold'
	}
});

export default SignupScreenOne;
