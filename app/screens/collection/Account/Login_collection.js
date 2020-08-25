import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input/input';

// const width = Dimensions.get('window').width;

const Login_client_screen = ({ navigation }) => {
	const onPress = () => {
		alert('clicked');
	};

	return (
		<View>
			<View style={styles.logoStyle}>
				<Image source={require('../../../assets/images/vipobox.png')} />
			</View>
			<Input textStyles={styles.text} InputStyles={styles.input} text="Phone number or email" value="47484848" />
			<Input textStyles={styles.text} InputStyles={styles.input} text="Password" value="47484848" />
			<View style={styles.LoginButtonStyle}>
				<Button text="Login into the box" onPress={() => navigation.navigate('BottomNavCollection')} />
				<Text style={styles.PasswordTextStyle}>Forget password?</Text>
			</View>

			<View style={styles.bottomTextStyle}>
				<Text style={styles.bottomTextStyle} onPress={() => navigation.navigate('SignupOne')}>
					Don't have a box? Create it
				</Text>
			</View>
		</View>
	);
};

Login_client_screen.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	logoStyle: {
		alignItems: 'center',
		marginVertical: 80
	},
	LoginButtonStyle: {
		marginVertical: 12,
		flexDirection: 'row',
		marginHorizontal: 13
	},
	PasswordTextStyle: {
		marginHorizontal: 30,
		marginTop: 15,
		fontSize: 12
	},
	bottomTextStyle: {
		color: '#3F51B5',
		fontSize: 14,
		alignItems: 'center',
		marginVertical: 25,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: '#fff',
		marginVertical: 10,
		marginHorizontal: 20,
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#20232a',
		borderRadius: 6
	},
	text: {
		marginHorizontal: 20
	}
});

export default Login_client_screen;
