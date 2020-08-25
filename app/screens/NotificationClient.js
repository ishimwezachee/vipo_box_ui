import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header/header';
import Button from '../components/Button';
import Colors from '../constants/color';
import { RowSeparator } from '../components/RowItem/settingImage-Text';

const NotificationScreenOne = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Header text="Notifications" />
				<View style={styles.subHeader}>
					<Text style={styles.headerText}>Eric Dukundane sent you SomeThing</Text>
					<View style={styles.imageText}>
						<View style={styles.cycle}>
							<Image source={require('../assets/images/box.png')} style={styles.image} />
						</View>
						<View style={styles.courierText}>
							<Text>Courier ID:VI001-0620 </Text>
							<Text>Sender:Ishimwe Zachee </Text>
							<Text>Date:1/9/2020</Text>
						</View>
					</View>
					<View style={styles.button}>
						<Button text="Choose the collection point" onPress={() => navigation.navigate('Map')} />
					</View>
					<View style={styles.greyTextView}>
						<Text style={styles.greyText}>Please note that if you don't choose.the system</Text>
						<Text style={styles.greyText}>will choose the closest to your location</Text>
						<Text style={styles.greyText}>The option is valid for 2 min</Text>
					</View>
					<RowSeparator />
				</View>

				<View style={styles.subHeader}>
					<Text style={styles.headerText}>Eric Dukundane has receive the courier</Text>
					<View style={styles.imageText}>
						<View style={styles.cycle2}>
							<Image source={require('../assets/images/box.png')} style={styles.image2} />
						</View>
						<View style={styles.courierText}>
							<Text>Courier ID:VI001-0620 </Text>
							<Text>Reciever:Ishimwe Zachee </Text>
							<Text>Agent:1/9/2020</Text>
							<Text>Collection Point:Ishimwe Zachee </Text>
							<Text>Date:1/9/2020</Text>
						</View>
					</View>

					<RowSeparator separatorStyle={styles.separatorStyle} />
				</View>
			</View>
		</ScrollView>
	);
};

NotificationScreenOne.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};
const styles = StyleSheet.create({
	container: {},

	cycle: {
		backgroundColor: Colors.lightGrey,
		padding: 10,
		borderRadius: 100,
		marginHorizontal: 20
	},
	cycle2: {
		backgroundColor: Colors.lightGrey,
		padding: 10,
		borderRadius: 100,
		marginHorizontal: 20,
		marginVertical: 20
	},
	image: {
		width: 30,
		height: 32
	},
	image2: {
		width: 30,
		height: 32
	},
	courierText: {},
	imageText: {
		flexDirection: 'row'
	},
	headerText: {
		fontSize: 15,
		fontWeight: 'bold',
		marginVertical: 10,
		marginLeft: 90
	},
	button: {
		marginVertical: 14,
		marginHorizontal: 80
	},
	greyText: {
		color: 'grey',
		fontSize: 13,
		marginLeft: 80
	},
	greyTextView: {
		marginBottom: 20
	},
	separatorStyle: {
		marginTop: 20
	}
});

export default NotificationScreenOne;
