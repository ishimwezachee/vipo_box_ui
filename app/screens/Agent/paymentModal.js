import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fontsto from 'react-native-vector-icons/Fontisto';

import Card from '../../components/Card/card';
import Button from '../../components/Button/button';
import Colors from '../../constants/color';

const PayModal = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Card style={styles.cardView}>
				<Text>Payment by</Text>
				<View style={styles.radio}>
					<View style={styles.sender}>
						<Fontsto name="radio-btn-passive" size={20} style={{ marginHorizontal: 5 }} />
						<Text>Sender</Text>
					</View>
					<View style={styles.reciever}>
						<Fontsto name="radio-btn-passive" size={20} style={{ marginHorizontal: 5 }} />
						<Text>Reciever</Text>
					</View>
				</View>

				<Button text="Request payment" buttonStyle={styles.buttonView} onPress={() => navigation.popToTop()} />
			</Card>
		</View>
	);
};

PayModal.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	container: {},
	cardView: {
		marginHorizontal: 20,
		marginVertical: '40%'
	},
	radio: {
		flexDirection: 'row',
		marginVertical: 30
	},
	sender: {
		flexDirection: 'row',
		marginHorizontal: 20
	},
	reciever: {
		flexDirection: 'row',
		marginHorizontal: 20
	},
	buttonView: {
		backgroundColor: Colors.green
	}
});

export default PayModal;
