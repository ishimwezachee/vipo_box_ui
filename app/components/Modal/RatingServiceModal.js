import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import color from '../../constants/color.js';

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
						<View style={styles.contentOne}>
							<Text style={{ fontWeight: 'bold', fontSize: 18 }}>HaKiziman Charles</Text>
							<Text style={{ fontSize: 15 }}>Agent AV1002.km063</Text>
							<Text style={{ fontSize: 13 }}>Kimihurura</Text>
							<View style={styles.starsImage}>
								<Image style={styles.imgSize} source={require('../../assets/images/star.png')} />
								<Image style={styles.imgSize} source={require('../../assets/images/star.png')} />
								<Image style={styles.imgSize} source={require('../../assets/images/star.png')} />
								<Image style={styles.imgSize} source={require('../../assets/images/star.png')} />
								<Image style={styles.imgSize} source={require('../../assets/images/star.png')} />
							</View>
						</View>

						<View style={styles.contentTwo}>
							<Text>Total couriers you have set through here 27</Text>
							<Text> Total couriers you have recieved through here 9</Text>
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
		// margin: 20,
		backgroundColor: 'blue',
		borderRadius: 20,
		// padding: 35,
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
		textAlign: 'center'
	},
	starsImage: {
		flexDirection: 'row'
	},
	contentOne: {
		backgroundColor: 'bluer'
	},
	contentTwo: {},
	imgSize: {
		width: 20,
		height: 20,
		margin: 6
	}
});

export default App;
