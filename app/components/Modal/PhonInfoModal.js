import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import color from '../../constants/color';
import { RowSeparator } from '../.../components/RowItem/Text-image';

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
						<Text style={styles.textTitle}>Courier VI001-062</Text>
						<View style={styles.imageText}>
							<View style={styles.courierText}>
								<View style={styles.innerText}>
									<Text style={{ fontWeight: 'bold' }}>Material</Text>
									<Text>Phone</Text>
								</View>

								<View style={styles.innerText}>
									<Text style={{ fontWeight: 'bold' }}>Type</Text>
									<Text>iPhone X</Text>
								</View>

								<View style={styles.innerText}>
									<Text style={{ fontWeight: 'bold' }}>Recieved by</Text>
									<Text>Ishimwe zachee</Text>
								</View>

								<View style={styles.innerText}>
									<Text style={{ fontWeight: 'bold' }}>Wothy</Text>
									<Text>500000</Text>
								</View>
							</View>
							<View style={styles.imageView}>
								<Image source={require('../../assets/images/mobiletype.png')} style={styles.image} />
							</View>
						</View>
						<Text>Insurance</Text>
						<RowSeparator />

						<View style={styles.bottomText}>
							<Text style={{ fontWeight: 'bold' }}>Insured:</Text>
							<Text>yes</Text>
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
				<Text style={styles.textStyle}> Modal</Text>
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
	textTitle: {
		justifyContent: 'center',
		fontWeight: 'bold',
		fontSize: 30
	},
	imageText: {
		flexDirection: 'row'
	},

	courierText: {
		margin: 30
	},
	image: {
		height: 131,
		width: 108,
		margin: 30
	},
	innerText: {
		marginBottom: 10
	},
	bottomText: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	}
});

export default App;
