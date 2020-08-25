import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header/header';
import Colors from '../../constants/color';
import { RowSeparator } from '../../components/RowItem/settingImage-Text';

const ManageVipo = () => {
	return (
		<View style={styles.container}>
			<Header text="Settings" />
			<Text style={styles.text}>VIPO BOX:VI001-0620</Text>
			<View style={styles.subContainer}>
				<View style={styles.section1}>
					<View style={styles.headText}>
						<Text style={styles.secionOneText1}>Saved deliver to addresses</Text>
						<Text style={{ color: Colors.lightGrey }}>Home -Chez Muhinde</Text>
						<Text style={{ color: Colors.lightGrey }}>KG 641 Street, Kimuhura,Kigali</Text>
					</View>
					<View style={styles.edittext}>
						<TouchableOpacity>
							<Text style={{ marginTop: 20, color: Colors.blue }}>Edit</Text>
						</TouchableOpacity>
					</View>
				</View>

				<RowSeparator />
				<View style={styles.section2}>
					<View style={styles.headText}>
						<Text style={{ color: Colors.lightGrey }}>Home -Chez Muhinde</Text>
						<Text style={{ color: Colors.lightGrey }}>KG 641 Street, Kimuhura,Kigali</Text>
					</View>
					<View style={styles.edittext}>
						<TouchableOpacity>
							<Text style={{ marginTop: 20, color: Colors.blue }}>Edit</Text>
						</TouchableOpacity>
					</View>
				</View>

				<RowSeparator />
				<View style={styles.section3}>
					<Text style={styles.vipoText}>Who can see my VIPOBOX</Text>
					<View style={styles.subSection1}>
						<View style={styles.left1}>
							<Text>Public</Text>
						</View>
						<View>
							<Image source={require('../../assets/images/radio.png')} style={styles.image} />
						</View>
					</View>

					<View style={styles.subSection1}>
						<View style={styles.left2}>
							<Text>Contacts Only</Text>
						</View>
						<View>
							<Image source={require('../../assets/images/fullRadio.png')} style={styles.image} />
						</View>
					</View>
					<View style={styles.subSection1}>
						<View style={styles.left3}>
							<Text>Everyone Expect</Text>
						</View>
						<View>
							<Text style={styles.textbottom}>Choose from Contacts</Text>
						</View>
					</View>
				</View>
				<RowSeparator />

				<View style={styles.section4}>
					<View style={styles.subSection4}>
						<View>
							<Text style={{ marginRight: '38%' }}>Notifications</Text>
						</View>
						<View>
							<Image
								source={require('../../assets/images/setting.png')}
								style={{ width: 30, height: 30 }}
							/>
						</View>
					</View>
					<View style={styles.subSection4}>
						<View>
							<Text style={{ marginRight: '38%' }}>Location</Text>
						</View>
						<View>
							<Text style={{ color: 'grey' }}>only using</Text>
						</View>
					</View>
					<View />
				</View>
			</View>
		</View>
	);
};

ManageVipo.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	container: {},
	text: {
		backgroundColor: Colors.lightGrey,
		textAlign: 'center',
		paddingVertical: 5
	},
	secionOneText1: {
		fontWeight: 'bold',
		marginVertical: 3
	},
	section1: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30,
		marginBottom: 20
	},
	section2: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 20
	},
	subSection1: {
		flexDirection: 'row',
		marginLeft: 30,
		marginVertical: 8
	},
	image: {
		width: 20,
		height: 20
	},
	vipoText: {
		marginLeft: 30,
		fontSize: 13,
		marginVertical: 5,
		fontWeight: 'bold'
	},
	left1: {
		marginRight: '50%'
	},
	left2: {
		marginRight: '35%'
	},
	left3: {
		marginRight: '10%'
	},
	textbottom: {
		fontSize: 13,
		borderWidth: 1,
		borderColor: Colors.lightGrey,
		color: 'grey',
		paddingHorizontal: 5,
		fontSize: 10
	},
	section3: {
		marginBottom: 10
	},
	subSection4: {
		flexDirection: 'row',
		marginLeft: 27,
		marginVertical: 5
	}
});

export default ManageVipo;
