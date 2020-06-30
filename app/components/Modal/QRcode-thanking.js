import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
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
							<Text style={styles.modalTextTitle}>Thank you!</Text>
							<Text style={styles.Text}>You cann now use this Qr code to share details</Text>
							<Text style={styles.Text}>With our agents </Text>
							<Image style={styles.image} source={require('../../assets/images/scan.png')} />
						</View>

						<View style={styles.buttonContainer}>
							<TouchableHighlight style={styles.scanButton} onPress={onShowModal}>
								<Text style={styles.scanText}>SHARE</Text>
							</TouchableHighlight>
							<TouchableHighlight style={styles.scanButton} onPress={onShowModal}>
								<Text style={styles.scanText}>DOWNLOAD</Text>
							</TouchableHighlight>
						</View>
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
	scanButton: {
		backgroundColor: color.black,
		margin: 3,
		borderRadius: 10
	},
	openText: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalTextTitle: {
		marginBottom: 20,
		// marginRight: 70,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	Text: {
		textAlign: 'center'
	},
	scanText: {
		padding: 15,
		color: color.white
	},
	image: {
		margin: 20,
		width: '65%',
		height: '55%',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 40
	},
	buttonContainer: {
		justifyContent: 'center',
		flexDirection: 'row'
	}
});

export default App;
