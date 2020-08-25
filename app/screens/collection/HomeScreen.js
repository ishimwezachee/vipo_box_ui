import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header/header';
import Button from '../../components/Button/button';

const styles = StyleSheet.create({
	buttonView: {
		marginVertical: 17,
		marginHorizontal: 30,
		borderRadius: 20,
		backgroundColor: 'dimgray'
	},
	buttonText: {
		color: '#fff',
		paddingVertical: 30
	},
	footer: {
		marginTop: 30
	}
});
const Home_agent = () => {
	return (
		<View>
			<Header text="Home" />
			<Button text="Scan the QR code" buttonStyle={styles.buttonView} textStyle={styles.buttonText} />
			<Button text="Enter the code" buttonStyle={styles.buttonView} textStyle={styles.buttonText} />
		</View>
	);
};

Home_agent.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

export default Home_agent;
