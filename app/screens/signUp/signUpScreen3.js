import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import colors from '../../constants/color';
import Input from '../../components/Input/input';
import InputOption from '../../components/Input/options_input';
import { RowSeparator } from '../../components/RowItem/settingImage-Text';

const SignupScreenThree = ({ navigation }) => {
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
						buttonStyle={styles.buttonOne}
						textStyle={styles.textStyleone}
						onPress={() => navigation.navigate('Login')}
					/>
				</View>
			</View>
			<View>
				<Text style={styles.personal}>Other</Text>
				<RowSeparator />
			</View>
			<View style={styles.Inputs}>
				<InputOption
					text="House/Building"
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<Input
					text="Other(optional)"
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>
			</View>

			<View style={styles.buttonView}>
				<Button
					text="Get the Box"
					buttonStyle={styles.buttonTwo}
					textStyle={styles.textTwo}
					onPress={() => navigation.navigate('BottomNav')}
				/>
			</View>
		</View>
	);
};

SignupScreenThree.navigationOptions = (navigationData) => {
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

export default SignupScreenThree;
