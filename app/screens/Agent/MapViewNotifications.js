import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import Button from '../../components/Button/button';
import Header from '../../components/Header/header';
import Colors from '../../constants/color';

const Location = () => {
	return (
		<View>
			<Header text="Dispatch" style={styles.head} styleText={styles.textStyle} />
			<Text style={styles.text}>Choose the prefered nearest point for the pick up </Text>
			<MapView
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			>
				<Marker coordinate={{ latitude: -1.9591757, longitude: 30.0923519 }} title={'usa'}>
					<Callout>
						<Text>Limitless Agency </Text>
					</Callout>
				</Marker>
			</MapView>
		</View>
	);
};

Location.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	map: {
		height: '100%'
	},
	head: {
		backgroundColor: 'dimgrey'
	},
	text: {
		textAlign: 'center',
		backgroundColor: 'dimgrey',
		color: 'white'
	},
	textStyle: {
		fontSize: 20,
		paddingBottom: 8
	}
});

export default Location;
