import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header/header';
import Colors from '../constants/color';

const WelcomeHomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header text="Home" />
			<View style={styles.subHeader}>
				<Text style={styles.headerText}>Welcome to the BOX!</Text>
				<Text style={styles.text}>At the BOX we like to keep our clients happ all times </Text>
				<Text>What can we help you with to day ?</Text>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('Details')}>
					<Image source={require('../assets/images/box.png')} style={styles.image} />
					<Text style={styles.sendStyle}>Send courier</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonTwo}>
					<Image source={require('../assets/images/box.png')} style={styles.image} />
					<Text style={styles.recieveStyle}>Reciever courier</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

WelcomeHomeScreen.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};
const styles = StyleSheet.create({
	subHeader: {
		alignItems: 'center',
		marginTop: 20
	},
	headerText: {
		fontSize: 20,
		margin: 8
	},
	text: {
		marginVertical: 7
	},
	buttonOne: {
		flexDirection: 'row',
		backgroundColor: Colors.headerColor,
		marginHorizontal: 40,
		marginVertical: 25,
		paddingVertical: 30,
		justifyContent: 'center',
		borderRadius: 20
	},

	image: {
		marginRight: 30
	},
	sendStyle: {
		color: Colors.white,
		fontSize: 18
	},
	buttonTwo: {
		flexDirection: 'row',
		backgroundColor: Colors.lightGrey,
		marginHorizontal: 40,
		marginVertical: 25,
		paddingVertical: 30,
		justifyContent: 'center',
		borderRadius: 20
	},
	recieveStyle: {
		color: Colors.black,
		fontSize: 18
	}
});

export default WelcomeHomeScreen;
