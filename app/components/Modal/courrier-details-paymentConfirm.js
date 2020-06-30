import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import color from '../../constants/color';

const App = () => {
	const [ modalVisible, setModalVisible ] = useState(false);
	const onShowModal = () => {
		setModalVisible(!modalVisible);
	};
	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.modalTexts}>
							<Text style={styles.modalTextTitle}>Confirm Payment</Text>
							<Text style={styles.Text}>Service fee</Text>
							<Text style={[ { color: 'grey', fontSize: 10 }, styles.Text ]}>
								service fee is 10% of the courier worth.
							</Text>
							<Text style={[ { paddingBottom: 16 }, styles.Text ]}>550 Rwf</Text>
							<Text style={styles.Text}>Insurance</Text>
							<Text style={[ { color: 'grey', fontSize: 10 }, styles.Text ]}>
								service fee is 10% of the courier worh
							</Text>
							<Text style={[ { paddingBottom: 16 }, styles.Text ]}>5,750 Rwf</Text>
							<Text style={[ { paddingBottom: 16 }, styles.Text ]}>Total:63000Rfw</Text>
						</View>

						<TouchableHighlight style={styles.closeButton} onPress={onShowModal}>
							<Text style={styles.openText}>Proceed</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>

			<TouchableHighlight
				style={styles.openButton}
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<Text style={styles.textStyle}>Show Modal</Text>
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
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
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
	closeButton: {
		backgroundColor: color.green,
		paddingVertical: 9,
		borderRadius: 5
	},
	openText: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalTextTitle: {
		marginBottom: 20,
		marginRight: 70,
		fontSize: 20,
		fontWeight: 'bold'
	},
	Text: {
		padding: 1
	}
});

export default App;
