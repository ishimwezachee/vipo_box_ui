import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/color';
import { RowSeparator } from '../RowItem/settingImage-Text';

const Pending = ({ text, image, style }) => {
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.imageView}>
					<Image source={image} style={styles.image} />
				</View>
				<View>
					<Text style={{ fontSize: 11 }}>Courier ID:VI001-0620 </Text>
					<Text style={{ fontSize: 11 }}>Reciever:Ishimwe Zachee </Text>
					<Text style={{ fontSize: 11 }}>Agent:1/9/2020</Text>
					<Text style={{ fontSize: 11 }}>Collection Point:Ishimwe Zachee </Text>
					<Text style={{ fontSize: 11 }}>Date:1/9/2020</Text>
				</View>
				<View>
					<Text style={{ ...styles.rightText, ...style }}> {text}</Text>
				</View>
			</View>
			<RowSeparator />
		</View>
	);
};

const styles = StyleSheet.create({
	subContainer: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		marginVertical: 20
	},
	imageView: {
		backgroundColor: Colors.lightGrey,
		alignSelf: 'flex-start',
		padding: 10,
		borderRadius: 100
	},
	image: {
		width: 30,
		height: 30
	},
	rightText: {
		fontWeight: 'bold',
		fontSize: 12
	}
});

export default Pending;
