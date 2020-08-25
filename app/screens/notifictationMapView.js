import React, { Component } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import apiKey from '../constants/key';

export default class Location extends Component {
	constructor(props) {
		super(props);
		this.state = {
			latitude: 0,
			longitude: 0,
			destination: '',
			predictions: []
		};
	}

	componentDidMount() {
		// get the current location
		Geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				});
			},
			(error) => this.setState({ error: error.message })
		),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 };
	}

	async onChangeDestination(destination) {
		this.setState({ destination });
		const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}&input={${destination}}&location=${this
			.state.latitude},${this.state.longitude}&radius=2000`;
		const result = await fetch(apiUrl);
		const json = await result.json();
		this.setState({
			predictions: json.predictions
		});
		console.log(json);
	}

	render() {
		const predictions = this.state.predictions.map((prediction) => (
			<Text style={styles.suggetions} key={prediction.id}>
				{prediction.description}
			</Text>
		));

		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121
					}}
					showsUserLocation={true}
				>
					<Marker coordinate={this.state} />
				</MapView>

				<TextInput
					placeholder="Enter destination..."
					style={styles.destinationInput}
					value={this.state.destination}
					onChangeText={(destination) => this.onChangeDestination(destination)}
				/>
				{predictions}
			</View>
		);
	}
}

Location.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	suggetions: {
		backgroundColor: 'white',
		padding: 5,
		fontSize: 18,
		borderWidth: 0.5,
		marginLeft: 5,
		marginRight: 5
	},
	destinationInput: {
		height: 40,
		borderWidth: 0.5,
		marginTop: 50,
		marginLeft: 5,
		padding: 5,
		marginRight: 5,
		backgroundColor: 'white'
	},
	container: {
		...StyleSheet.absoluteFillObject
	},
	map: {
		...StyleSheet.absoluteFillObject
	}
});
