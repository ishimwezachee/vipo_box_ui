import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header/header';
import { RowSeparator } from '../components/RowItem/settingImage-Text';
import EditProfileInput from '../components/Input/textInput';
import Button from '../components/Button/button';

const Edit_Profile = ({ navigation }) => {
	return (
		<View>
			<ScrollView>
				<View style={styles.container}>
					<Header text="Edit Profile" />
				</View>
				<View style={styles.edit}>
					<Text style={styles.textstyle}>Personal</Text>
					<Text style={styles.editText}>Edit</Text>
				</View>
				<RowSeparator />
				<View style={styles.profile}>
					<EditProfileInput />
					<Button buttonStyle={styles.button} text="Update the Box" onPress={() => navigation.popToTop()} />
				</View>
			</ScrollView>
		</View>
	);
};

Edit_Profile.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};
const styles = StyleSheet.create({
	container: {
		marginBottom: 30
	},
	textstyle: {
		color: 'grey',
		fontSize: 14,
		marginLeft: 10
	},
	edit: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	editText: {
		color: 'blue',
		marginRight: 10
	},
	input: {
		backgroundColor: 'white',
		marginVertical: 2,
		marginHorizontal: 10,
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#20232a',
		borderRadius: 4,
		width: '40%'
	},
	text: {
		marginHorizontal: 20
	},

	button: {
		marginLeft: 100,
		marginRight: 50,
		marginTop: 15,
		marginBottom: 30
	},

	profile: {
		// flexDirection: 'row'
	}
});

export default Edit_Profile;
