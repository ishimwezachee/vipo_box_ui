import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Fontsto from 'react-native-vector-icons/Fontisto';
import Card from '../../components/Card/card';
import Button from '../../components/Button/button';
import Colors from '../../constants/color';

const ScanModalScreen = ({ navigation }) => {
	return (
		<Card style={styles.buttonContainer}>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.titleStyle}>
						<Text style={styles.titleOne}> Courier:VI001-062 </Text>
						<Text style={styles.titleTwo}>Sender:Munyakazi Bruce </Text>
					</View>
					<View style={styles.imageText}>
						<View style={styles.TextView}>
							<View style={styles.textMaterial}>
								<Text style={styles.material}>Material</Text>
								<Text style={styles.phone}> Phone</Text>
							</View>

							<View style={styles.textMaterial}>
								<Text style={styles.material}>Type</Text>
								<Text style={styles.phone}> IPhone x</Text>
							</View>

							<View style={styles.textMaterial}>
								<Text style={styles.material}>Worthy</Text>
								<Text style={styles.phone}> 5000.000frw</Text>
							</View>

							<View style={styles.textMaterial}>
								<Text style={styles.material}>Receiver</Text>
								<Text style={styles.phone}>Dukundane Eric</Text>
								<Text style={styles.phone}>VI001-0620</Text>
								<Text style={styles.phone}>10KG 632 Street,Kimihurura,Kigali</Text>
							</View>
						</View>

						<View>
							<Image source={require('../../assets/images/mobiletype.png')} style={styles.image} />
						</View>
					</View>

					<View style={styles.separatorLine}>
						<View>
							<Text style={styles.insureText}>Insurance</Text>
						</View>
						<View style={styles.linTwo} />
					</View>

					<View style={styles.insuredTextView}>
						<Text>
							Insured:<Text style={styles.nestedText}>yes</Text>
						</Text>
					</View>

					<View style={styles.separatorLine}>
						<View>
							<Text style={styles.insureText}>Payment</Text>
						</View>
						<View style={styles.linTwo} />
					</View>

					<View style={styles.bottom}>
						<View style={styles.addBag}>
							<Text style={styles.bagtext}>Add a bag:</Text>
							<View style={styles.radioNo}>
								<Fontsto name="radio-btn-passive" size={20} />
								<Text>No</Text>
							</View>
							<View style={styles.radionYes}>
								<Fontsto name="radio-btn-active" size={20} />
								<Text>Yes</Text>
							</View>
						</View>

						<View style={styles.bottomView}>
							<Text>Services fee:750 Rwf</Text>
							<Text>Insurance fee570050 Rwf</Text>
							<Text>Totla:6300Rwf</Text>
						</View>
						<Button
							text="Proceed"
							buttonStyle={styles.buttonView}
							onPress={() => navigation.navigate('Payment')}
						/>
					</View>
				</View>
			</ScrollView>
		</Card>
	);
};

ScanModalScreen.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	buttonContainer: {
		marginHorizontal: 10,
		marginVertical: 15
	},
	imageText: {
		flexDirection: 'row'
	},
	textMaterial: {
		marginVertical: 10
	},
	phone: {
		color: Colors.lightGrey
	},
	material: {
		fontWeight: 'bold'
	},
	image: {
		width: 120,
		height: 140,
		marginTop: 50
	},
	titleStyle: {
		marginLeft: 20,
		marginBottom: 10,
		alignItems: 'center'
	},
	titleOne: {
		fontWeight: 'bold',
		fontSize: 17
	},
	titleTwo: {
		fontWeight: 'bold',
		color: Colors.blue
	},
	linTwo: {
		borderWidth: 1,
		borderColor: Colors.lightGrey
	},
	separatorLine: {
		marginLeft: 20
	},
	insureText: {
		color: 'gray'
	},
	nestedText: {
		color: Colors.green
	},
	insuredTextView: {
		alignItems: 'center',
		marginVertical: 10
	},
	addBag: {
		flexDirection: 'row',
		marginVertical: 10
	},
	bagtext: {
		marginHorizontal: 20
	},
	radioNo: {
		marginHorizontal: 10,
		flexDirection: 'row'
	},
	radionYes: {
		marginHorizontal: 10,
		flexDirection: 'row'
	},
	bottomView: {
		marginLeft: 20,
		marginVertical: 10
	},
	buttonView: {
		marginHorizontal: 50,
		backgroundColor: 'dimgrey'
	}
});

export default ScanModalScreen;
