import React from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

export const Image_text = ({ text, onPress, image, name }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageBackround}>
				<Ionicons name={name} size={25} />
				{/* <Image style={styles.image} source={image} /> */}
			</View>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

export const RowSeparator = ({ separatorStyle }) => <View style={[ styles.separator, separatorStyle ]} />;
