import { StyleSheet } from 'react-native';
import Colors from '../../constants/color';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		margin: 20,
		paddingVertical: 1
	},
	image: {
		width: 25,
		height: 25
	},
	text: {
		fontSize: 15,
		marginLeft: 20,
		marginTop: 15
	},
	separator: {
		backgroundColor: 'gray',
		height: StyleSheet.hairlineWidth,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 15
	},
	footer: {
		color: 'grey',
		fontSize: 10
	},
	imageBackround: {
		backgroundColor: Colors.lightGrey,
		padding: 10,
		borderRadius: 100
	}
});
