import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import { RowSeparator } from '../RowItem/Text-image';
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
							<Text style={styles.modalTextTitle}>Courier Details</Text>

							<View style={styles.textView}>
								<View style={styles.LeftText}>
									<Text style={styles.texCard}>Courier ID:</Text>
									<Text style={styles.texCard}>Reciever:</Text>
									<Text style={styles.texCard}>Agent:</Text>
									<Text style={styles.texCard}>Dispatch:</Text>
									<Text style={styles.texCard}>Date:</Text>
								</View>
								<View style={styles.RightText}>
									<Text style={styles.rightText}>V100-06</Text>
									<Text style={styles.rightText}>Dukundane Eric</Text>
									<Text style={styles.rightText}>Hakizimana charles </Text>
									<Text style={styles.rightText}>Kimihurura </Text>
									<Text style={styles.rightText}>12/6/2020</Text>
								</View>
							</View>
						</View>
						<View style={styles.statusSeparator}>
							<Text style={styles.statusStyle}>Status</Text>
							<RowSeparator />
						</View>
						<View style={styles.imageTextView}>
							<Text style={styles.imageText}> SENT</Text>
							<View style={styles.imgView}>
								<Image style={styles.logoImage} source={require('../../assets/images/box.png')} />
							</View>
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
		marginBottom: 25,

		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	scanText: {
		padding: 15,
		color: color.white
	},
	textView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: 40,
		marginVertical: 50
	},
	texCard: {
		marginRight: 50,
		marginBottom: 5
	},
	rightText: {
		marginBottom: 5
	},
	statusSeparator: {
		flexDirection: 'column',
		marginBottom: 20
	},
	statusStyle: {
		marginLeft: 15
	},
	imageTextView: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageText: {
		color: color.black,
		fontWeight: color.bold,
		fontSize: 25,
		marginBottom: 20
	},
	imgView: {
		backgroundColor: '#555555',
		padding: 20,
		borderRadius: 120
	},
	logoImage: {
		width: 50,
		height: 50
	}
});

export default App;
