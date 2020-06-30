import React, { useState } from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import styles from './styles';
import Header from '../../components/Header/header';
import OptionsInput from '../../components/Input/options_input';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import { RowSeparator } from '../../components/RowItem/Text-image';
import Footer from '../../components/Footer/footer';

const PaymentDetail = () => {
	const [ modalVisible, setModalVisible ] = useState(false);

	var radio_props = [ { label: 'Yes', value: 0 }, { label: 'No', value: 1 } ];
	return (
		<View>
			<Header text="Payment" />
			<OptionsInput
				text="Payment by"
				ViewStyle={styles.InputView}
				TextStyle={styles.paymentBy}
				InputStyles={styles.picker}
			/>
			<Input
				text="Phone Number"
				InputStyles={styles.input}
				ViewStyle={styles.viewRow}
				textStyles={styles.phonumber}
			/>
			<Input text="Amount" InputStyles={styles.input} ViewStyle={styles.viewRow} textStyles={styles.amount} />

			<Text style={styles.insuranceText}>Insurance</Text>
			<RowSeparator />
			<View style={styles.textView}>
				<Text style={styles.textOne}>with insurance,the company takes care any problem</Text>
				<Text style={styles.textOne}>that might happen in transit.So would you like to</Text>
				<Text style={styles.textOne}>insure your courier?</Text>
			</View>
			{/* Radio button  */}
			<View style={styles.radioButton}>
				<RadioForm
					radio_props={radio_props}
					initial={1}
					formHorizontal={true}
					buttonColor={'#000'}
					onPress={() => console.log('radiobutton')}
				/>
			</View>
			{/* Modal codes  */}
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Confirm Payment</Text>
							<Text style={styles.feeService}>Service fee</Text>
							<Text style={styles.servicePercent}>Service service fee is 10% of the courrier worth.</Text>
							<Text style={styles.money}>550Rwf</Text>
							<TouchableHighlight
								style={{ ...styles.openButton, backgroundColor: '#0FBA00' }}
								onPress={() => {
									setModalVisible(!modalVisible);
								}}
							>
								<Text style={styles.textStyle}>Proceed</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>
			</View>
			<Button
				onPress={() => {
					setModalVisible(true);
				}}
				text="SEND"
				buttonStyle={styles.button}
			/>

			<RowSeparator />
			<View style={styles.viewTwo}>
				<Text style={styles.textTwo}>With insurance,the company takes care any problem</Text>
				<Text style={styles.textTwo}>that might happen in transit.So would you like to</Text>
			</View>
			{/* <Footer /> */}
		</View>
	);
};

export default PaymentDetail;
