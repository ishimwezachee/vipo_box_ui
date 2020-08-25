import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	InputView: {
		flexDirection: 'row',
		marginTop: 40,
		marginBottom: 10,
		width: 500,
		height: 40
	},
	optionText: {
		margin: 10
	},
	paymentBy: {
		margin: 10,
		marginRight: 23
	},
	picker: {
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		width: '48%',
		borderRadius: 16
	},
	viewRow: {
		flexDirection: 'row',
		marginBottom: 18
	},
	input: {
		borderBottomWidth: 1,
		width: '65%',
		height: 40,
		borderRadius: 13,
		justifyContent: 'center',
		alignItems: 'center'
	},
	phonumber: {
		margin: 10
	},
	amount: {
		margin: 10,
		marginRight: 50
	},
	button: {
		marginHorizontal: '25%',
		marginBottom: 10,
		borderRadius: 10
		// elevation: 2
	},
	textOne: {
		fontSize: 13,
		color: 'black',
		textAlign: 'center'
	},
	textView: {},
	insuranceText: {
		marginLeft: 15,
		color: 'blue'
	},
	footer: {
		justifyContent: 'space-between'
	},
	radioButton: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	textTwo: {
		color: 'gray',
		fontSize: 11
	},
	viewTwo: {
		justifyContent: 'center',
		alignItems: 'center'
	},
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
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 9
	},
	openButton: {
		borderRadius: 8
	},
	modalText: {
		marginBottom: 15,
		fontSize: 20
	},
	feeService: {
		fontSize: 16
	},
	servicePercent: {
		color: 'grey',
		fontSize: 13
	},
	money: {
		fontSize: 16,
		marginBottom: 15
	}
});

module.exports = styles;
