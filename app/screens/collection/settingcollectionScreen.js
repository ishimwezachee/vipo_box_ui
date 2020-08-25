import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header/header';
import { Image_text, RowSeparator } from '../../components/RowItem/settingImage-Text';
import Colors from '../../constants/color';

const SettingClient_screen = () => {
	return (
		<View>
			<View style={Styles.rows}>
				<Header text="Settings" style={Styles.head} styleText={Styles.text} />
				<Text style={Styles.collection}>Collection Point Account</Text>
				<Image_text text="Edit Profile" name="pencil-outline" />
				<RowSeparator />
				<Image_text text="Manage your VIPO BOX" name="settings-outline" />
				<RowSeparator />
				<Image_text text="wallet" name="wallet-sharp" />
				<RowSeparator />
				<Image_text text="Sign out of the box" name="power-outline" />
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

const Styles = StyleSheet.create({
	rows: {
		marginBottom: 78
	},
	head: {
		backgroundColor: 'white'
	},
	text: {
		color: 'black'
	},
	collection: {
		textAlign: 'center',
		backgroundColor: Colors.blue,
		color: 'white',
		paddingVertical: 5
	}
});

export default SettingClient_screen;
