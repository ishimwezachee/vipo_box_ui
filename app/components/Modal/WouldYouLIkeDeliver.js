import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Button from '../Button/button';

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
						<View style={styles.textView}>
							<Text style={styles.modalText}> Would like it delivered at </Text>
							<Text style={styles.modalText}> One of you saved address ? </Text>
							<View style={styles.buttonStyleView}>
								<Button text="Yes" buttonStyle={styles.button} />
								<Button text="No" buttonStyle={[ styles.button, { backgroundColor: 'grey' } ]} />
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
		// marginBottom: 15,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 19
	},
	textView: {
		marginVertical: 25
	},
	buttonStyleView: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 20
	},
	button: {
		paddingVertical: 13,
		paddingHorizontal: 45
	}
});

export default App;
