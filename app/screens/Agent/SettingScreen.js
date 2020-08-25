import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Black_header from '../../components/Header/black_header';
import Main_header from '../../components/Header/header';
import { Image_text, RowSeparator } from '../../components/RowItem/settingImage-Text';

const SettingClient_screen = ({ navigation }) => {
	return (
		<View>
			<View style={styles.rows}>
				<Main_header text="Settings" />
				<Black_header text="VIPO BOX:VI001-83" />
				<View style={styles.editProfile}>
					<View style={styles.imageView}>
						<Image source={require('../../assets/images/eric.jpeg')} style={styles.image} />
					</View>
					<View style={styles.textView}>
						<Text style={styles.NameStyles}>Dukundane eric</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
							<Text style={{ color: 'white' }}> Edit Profile</Text>
						</TouchableOpacity>
					</View>
				</View>

				<TouchableOpacity onPress={() => navigation.navigate('Manage')}>
					<Image_text text="Manage your VIPO BOX" name="settings-outline" />
				</TouchableOpacity>
				<RowSeparator />
				<Image_text text="wallet" name="wallet-sharp" />
				<RowSeparator />
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Image_text text="Sign out of the box" name="power-outline" />
				</TouchableOpacity>
				<RowSeparator />
			</View>
		</View>
	);
};

SettingClient_screen.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	rows: {
		marginBottom: 78
	},
	editProfile: {
		backgroundColor: 'grey',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingVertical: 10,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		marginBottom: 10
	},
	imageView: {},
	textView: {},
	image: {
		borderRadius: 50,
		borderWidth: 1,
		borderColor: 'black',
		width: 60,
		height: 60
	},
	NameStyles: {
		fontWeight: 'bold',
		fontSize: 18,
		paddingVertical: 5
	}
});

export default SettingClient_screen;
