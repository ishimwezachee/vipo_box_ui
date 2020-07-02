import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Button from '../components/Button/button';
import { RowSeparator } from '../components/RowItem/Text-image';

const App = () => {
	const [ modalVisible, setModalVisible ] = useState(false);
	return (
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
						<Text style={styles.modalText}>Thank you !</Text>
						<Text style={styles.Text}>Our team is working on your delivery,seat back</Text>
						<Text style={styles.Text}>and relax.We will notify you when the package</Text>
						<Text style={styles.Text}>has arrive.</Text>
						<Button text="Return" buttonStyle={styles.button} />
						<View style={styles.separator}>
							<RowSeparator />
						</View>
						<Text style={styles.footer}> Coppyright@ VIPO BOX 2020. All Rights Reserved</Text>
					</View>
				</View>
			</Modal>

			<TouchableHighlight
				style={styles.openButton}
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<Text style={styles.textStyle}>Modal</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	openButton: {
		backgroundColor: '#F194FF',
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	},
	Text: {
		fontSize: 14
	},
	button: {
		paddingHorizontal: 80,
		marginVertical: 20
	}
});

export default App;
