import React from 'react';
import { View, StyleSheet } from 'react-native';

import ModalComponet from '../components/Modal/modalComponents';

const TestModal = () => {
	return (
		<View>
			<ModalComponet
				centeredView={styles.centeredView}
				modalView={styles.modalView}
				openButton={styles.openButton}
				textStyle={styles.textStyle}
				modalText={styles.modalText}
				proceedButton={styles.proceedButton}
			/>
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
			height: 1
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	proceedButton: {
		backgroundColor: '#2196F3'
	},
	openButton: {
		borderWidth: 1,
		backgroundColor: '#2196F3',
		borderRadius: 0,
		padding: 30
	},
	textStyle: {
		color: 'white'
		// textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center'
	}
});

export default TestModal;
