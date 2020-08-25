import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import Button from '../components/Button/button';

const Location = () => {
	return (
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
	}
});

export default Location;
