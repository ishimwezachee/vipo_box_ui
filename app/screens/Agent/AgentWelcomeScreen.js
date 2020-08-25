import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header/header';
import Colors from '../../constants/color';

const AgentWelcomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header text="Home" style={styles.headStyle} styleText={styles.topHeaderText} />
			<View style={styles.subHeader}>
				<Text style={styles.headerText}>Welcome to the BOX!</Text>
				<Text style={styles.text}>At the BOX we like to keep our clients happ all times </Text>
				<Text>What can we help you with to day ?</Text>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('Modal')}>
					<AntDesign name="scan1" size={25} color="white" style={styles.icon} />

					<Text style={styles.sendStyle}>Scans the QR code</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonTwo}>
					<AntDesign name="phone" size={25} color="white" style={styles.icon} />
					<Text style={styles.recieveStyle}>Enter the phone number</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

AgentWelcomeScreen.navigationOptions = (navigationData) => {
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
		backgroundColor: Colors.blue,
		marginHorizontal: 40,
		marginVertical: 25,
		paddingVertical: 30,
		justifyContent: 'center',
		borderRadius: 20
	},

	icon: {
		marginRight: 30
	},
	sendStyle: {
		color: Colors.white,
		fontSize: 18
	},
	buttonTwo: {
		flexDirection: 'row',
		backgroundColor: Colors.blue,
		marginHorizontal: 40,
		marginVertical: 25,
		paddingVertical: 30,
		justifyContent: 'center',
		borderRadius: 20
	},
	recieveStyle: {
		color: Colors.white,
		fontSize: 18
	},
	headStyle: {
		backgroundColor: 'gray'
	},
	topHeaderText: {
		color: Colors.black
	}
});

export default AgentWelcomeScreen;
