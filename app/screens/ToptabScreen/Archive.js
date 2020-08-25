import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../../constants/color';

const Archive = () => {
	return (
		<View style={styles.container}>
			<View style={styles.textImage}>
				<TouchableOpacity>
					<View style={styles.imageView}>
						<Image source={require('../../assets/images/box.png')} />
					</View>
				</TouchableOpacity>
				<Text>Sent Couriers </Text>
			</View>
			<View style={styles.textImage2}>
				<TouchableOpacity>
					<View style={styles.imageView2}>
						<Image source={require('../../assets/images/box.png')} />
					</View>
				</TouchableOpacity>

				<Text>Recieve Couriers </Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	imageView: {
		backgroundColor: 'black',
		alignSelf: 'flex-start',
		padding: 10,
		borderRadius: 100
	},
	textImage: {
		backgroundColor: Colors.lightGrey,
		paddingHorizontal: 35,
		paddingVertical: 45,
		marginVertical: 30,
		marginLeft: 10,
		marginRight: 1,
		borderBottomLeftRadius: 20,
		borderTopLeftRadius: 20
	},
	imageView2: {
		backgroundColor: 'grey',
		alignSelf: 'flex-start',
		padding: 10,
		borderRadius: 100,
		marginLeft: 20
	},
	textImage2: {
		backgroundColor: Colors.lightGrey,
		alignSelf: 'flex-start',
		paddingHorizontal: 35,
		paddingVertical: 45,
		marginVertical: 30,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		marginRight: 10
	}
});

export default Archive;
