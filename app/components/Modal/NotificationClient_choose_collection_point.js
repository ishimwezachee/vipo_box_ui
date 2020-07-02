import React, { Component, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import color from '../../constants/color';
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
						<View style={styles.Viewone}>
							<View style={styles.headText}>
								<Text style={styles.textTitle}>Do you wat to collect your Courrier </Text>
								<Text style={styles.textTitle}>from Muhinde shop? </Text>
							</View>

							<View style={styles.column}>
								<View style={styles.columnt1}>
									<Text>Agent ID:</Text>
									<Text>Names:</Text>
									<Text>Location:</Text>
								</View>

								<View style={styles.columnt2}>
									<Text>Viagent01-020</Text>
									<Text>Boss Muhinde</Text>
									<Text>Rugando,Kimihurura,Kigali,Rwanda</Text>
								</View>
							</View>
							<View style={styles.separator} />

							<View style={styles.column}>
								<View style={styles.columnt1}>
									<Text>Courier ID:</Text>
									<Text>Sender:</Text>
									<Text>Date:</Text>
								</View>

								<View style={styles.columnt2}>
									<Text>VI0001-0620</Text>
									<Text>Ishimwe Zachee</Text>
									<Text>12/6/2020</Text>
								</View>
							</View>
							<View style={styles.separator} />

							<View style={styles.column}>
								<View style={styles.columnt1}>
									<Text>Service:</Text>
									<Text>Paid by :</Text>
								</View>

								<View style={styles.columnt2}>
									<Text>1350RW</Text>
									<Text>Ishimwe zachee</Text>
								</View>
							</View>
						</View>
						<Button text="Confirm the poinnt" buttonStyle={styles.button} />
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
	column: {
		flexDirection: 'row',
		marginBottom: 21
	},
	columnt1: {
		marginRight: 30
	},
	column2: {},
	textTitle: {
		fontSize: 14,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	headText: {
		marginBottom: 40
	},
	separator: {
		marginBottom: 25,
		backgroundColor: 'gray',
		height: StyleSheet.hairlineWidth,
		marginLeft: 0,
		marginRight: 0,
		fontWeight: 'bold'
	},
	button: {
		backgroundColor: color.green,
		paddingHorizontal: 50,
		marginVertical: 30
	}
});

export default App;
