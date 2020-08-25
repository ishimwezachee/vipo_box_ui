import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header/header';
import Button from '../components/Button/button';

const Home_agent = ({ navigation }) => {
	return (
		<View>
			<Header text="Welcome" />
			<View style={{ marginTop: 35 }}>
				<Button
					text="Client"
					buttonStyle={styles.buttonView}
					textStyle={styles.buttonText}
					onPress={() => navigation.navigate('MainClient')}
				/>
				<Button
					text="Agent"
					buttonStyle={styles.buttonView}
					textStyle={styles.buttonText}
					onPress={() => navigation.navigate('MainAgent')}
				/>
				<Button
					text="Collection"
					buttonStyle={styles.buttonView}
					textStyle={styles.buttonText}
					onPress={() => navigation.navigate('MainCollection')}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonView: {
		marginVertical: 17,
		marginHorizontal: 30
	},
	buttonText: {
		color: '#fff',
		paddingVertical: 30
	},
	footer: {
		marginTop: 30
	}
});

export default Home_agent;
