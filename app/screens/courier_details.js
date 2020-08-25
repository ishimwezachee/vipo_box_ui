import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header/header';
import OptionsInput from '../components/Input/options_input';
import Input from '../components/Input/input';
import Button from '../components/Button/button';
import { RowSeparator } from '../components/RowItem/settingImage-Text';
import Footer from '../components/Footer/footer';

const ClientCourierDetail = ({ navigation }) => {
	return (
		<ScrollView>
			<View>
				<Header text="Courier Details" />
				<OptionsInput
					text="Receiver Names"
					placeholder={{ label: 'select Reciever', value: null }}
				itemSelect={[ { label: 'Alice', value: 'Alice' } ]}
					ViewStyle={styles.InputView}
					TextStyle={styles.receiverName}
					InputStyles={styles.picker}
				/>
				<Input
					text="Phone Number"
					InputStyles={styles.input}
					ViewStyle={styles.viewRow}
					textStyles={styles.phoneNumber}
				/>
				<Input
					text="VIPO BOX"
					InputStyles={styles.input}
					ViewStyle={styles.viewRow}
					textStyles={styles.address}
				/>
				<RowSeparator />
				<Input
					text="Courier ID"
					InputStyles={styles.input}
					ViewStyle={styles.ViewCourier}
					textStyles={styles.currierId}
				/>
				<OptionsInput
					text="content type"
					ViewStyle={styles.InputViewDescription}
					TextStyle={styles.description}
					InputStyles={styles.picker}
				/>
				<Input
					text="Description"
					InputStyles={styles.input}
					ViewStyle={styles.ViewCourier}
					textStyles={styles.currierId}
				/>
				<Button text="CONTINUE" buttonStyle={styles.button} onPress={() => navigation.navigate('Payment')} />
				{/* <Footer /> */}
			</View>
		</ScrollView>
	);
};

ClientCourierDetail.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	InputView: {
		flexDirection: 'row',
		marginTop: 30,
		marginBottom: 20,
		width: 500,
		height: 40
	},
	InputViewDescription: {
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 10,
		width: 520,
		height: 40
	},
	optionText: {
		margin: 10
	},
	receiverName: {
		margin: 10,
		marginRight: 10
	},
	description: {
		margin: 10,
		marginRight: 40
	},
	picker: {
		borderBottomWidth: 1,
		width: '43%',
		borderRadius: 12
	},
	viewRow: {
		flexDirection: 'row',
		marginBottom: 20
	},
	ViewCourier: {
		flexDirection: 'row',
		marginBottom: 0
	},
	input: {
		borderBottomWidth: 1,
		width: '65%',
		height: 40,
		borderRadius: 13,
		justifyContent: 'center',
		alignItems: 'center'
	},
	phoneNumber: {
		margin: 10
	},
	address: {
		margin: 10,
		marginRight: 40
	},
	currierId: {
		margin: 10,
		marginRight: 40
	},
	button: {
		marginLeft: 120,
		marginRight: 30,
		borderRadius: 10,
		marginTop: 10
	},
	textOne: {
		fontSize: 11,
		color: 'grey',
		textAlign: 'center'
	}
});

export default ClientCourierDetail;
