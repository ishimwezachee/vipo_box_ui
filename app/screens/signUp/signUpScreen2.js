import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import colors from '../../constants/color';
import InputOption from '../../components/Input/options_input';
import { RowSeparator } from '../../components/RowItem/settingImage-Text';

const SignupScreenTwo = ({ navigation }) => {
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
				<Text style={styles.address}>Address</Text>
				<RowSeparator />
			</View>
			<View style={styles.Inputs}>
				<InputOption
					text="Province"
					placeholder={{ label: 'select province', value: null }}
				itemSelect={[
					{ label: 'Kigali city', value: 'kigali' },
					{ label: 'Northern province', value: 'North' },
					{ label: 'Sourhern province', value: 'south' }
				]}
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<InputOption
					text="District"
					placeholder={{ label: 'select District', value: null }}
				itemSelect={[ { label: 'Gasabo', value: 'gasabo' } ]}
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>
				<InputOption
					text="Sector"
					placeholder={{ label: 'select sector', value: null }}
				itemSelect={[ { label: 'Kimihurura', value: 'Kimihurura' } ]}
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<InputOption
					text="cell"
					placeholder={{ label: 'select cell', value: null }}
				itemSelect={[ { label: 'Rugando', value: 'Kimihurura' } ]}
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<InputOption
					text="Village"
					placeholder={{ label: 'select Village', value: null }}
				itemSelect={[ { label: 'Gasasa', value: 'Gasasa' } ]}
					InputStyles={styles.InputStyles}
					ViewStyle={styles.ViewStyle}
					TextStyle={styles.TextStyle}
				/>

				<InputOption
					text="Street"
					placeholder={{ label: 'select Street', value: null }}
				itemSelect={[ { label: 'KG 10', value: 'KG 10' } ]}
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
					onPress={() => navigation.navigate('SignUpThree')}
				/>
			</View>
		</View>
	);
};

SignupScreenTwo.navigationOptions = (navigationData) => {
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
		marginTop: '5%',
		marginLeft: '30%'
	},
	textTwo: {
		color: colors.white
	},
	address: {
		marginTop: 25,
		marginLeft: 10,
		fontSize: 17,
		fontWeight: 'bold'
	}
});

export default SignupScreenTwo;
