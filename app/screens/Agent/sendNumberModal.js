import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../components/Card/card';
import Input from '../../components/Input/input';
import Button from '../../components/Button';
import Colors from '../../constants/color';

const SenderNumberModalScreen = () => {
	return (
		<View style={styles.container}>
			<Card style={styles.card}>
				<Text style={styles.text}>Enter the number</Text>
				<Input InputStyles={styles.input} placeholder={'+250'} />
				<Button text="Confirm the address" buttonStyle={styles.button} />
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	text: {
		textAlign: 'center'
	},
	input: {
		borderBottomWidth: 2,
		borderBottomColor: 'gray',
		marginVertical: 30,
		width: 200
	},
	button: {
		backgroundColor: Colors.green
	},
	card: {
		marginHorizontal: 20,
		marginVertical: '40%'
	}
});

export default SenderNumberModalScreen;
