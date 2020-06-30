import React, { useState } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View } from 'react-native';

const App = ({ centeredView, modalView, openButton, textStyle, modalText, proceedButton }) => {
	const [ modalVisible, setModalVisible ] = useState(false);
	return (
		<View style={centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
				}}
			>
				<View style={centeredView}>
					<View style={modalView}>
						<Text style={modalText}>Confirm Payment</Text>

						<TouchableHighlight
							style={proceedButton}
							onPress={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<Text style={textStyle}>Proceed</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>

			<TouchableHighlight
				style={openButton}
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<Text style={textStyle}>Show Modal</Text>
			</TouchableHighlight>
		</View>
	);
};

export default App;
