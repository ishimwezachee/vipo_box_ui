import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './input';
import OptionsInput from './options_input';
import { RowSeparator } from '../RowItem/settingImage-Text';

const Text_Input = ({ navigation }) => {
	return (
		<View>
			<Input text="ID number" InputStyles={styles.input} ViewStyle={styles.viewRow} textStyles={styles.textOne} />
			<Input text="Phone" InputStyles={styles.input} ViewStyle={styles.viewRow} textStyles={styles.textTwo} />
			<Input text="Email" InputStyles={styles.input} ViewStyle={styles.viewRow} textStyles={styles.textthre} />

			<View style={styles.edit}>
				<Text style={styles.text2}>Address</Text>
				<Text style={styles.editText}>Edit</Text>
			</View>
			<RowSeparator />
			<OptionsInput
				text="province"
				placeholder={{ label: 'select province', value: null }}
				itemSelect={[
					{ label: 'Kigali city', value: 'kigali' },
					{ label: 'Northern province', value: 'North' },
					{ label: 'Sourhern province', value: 'south' }
				]}
				InputStyles={styles.picker}
				ViewStyle={styles.optionView}
				TextStyle={styles.optionText}
			/>
			<OptionsInput
				text="District"
				placeholder={{ label: 'select District', value: null }}
				itemSelect={[ { label: 'Gasabo', value: 'gasabo' } ]}
				ViewStyle={styles.optionView}
				TextStyle={styles.district}
				InputStyles={styles.picker}
			/>
			<OptionsInput
				text="Sector"
				placeholder={{ label: 'select sector', value: null }}
				itemSelect={[ { label: 'Kimihurura', value: 'Kimihurura' } ]}
				ViewStyle={styles.optionView}
				TextStyle={styles.sector}
				InputStyles={styles.picker}
			/>
			<OptionsInput
				text="Cell"
				placeholder={{ label: 'select cell', value: null }}
				itemSelect={[ { label: 'Rugando', value: 'Kimihurura' } ]}
				ViewStyle={styles.optionView}
				TextStyle={styles.cell}
				InputStyles={styles.picker}
			/>
			<OptionsInput
				text="Village"
				placeholder={{ label: 'select Village', value: null }}
				itemSelect={[ { label: 'Gasasa', value: 'Gasasa' } ]}
				ViewStyle={styles.optionView}
				TextStyle={styles.village}
				InputStyles={styles.picker}
			/>
			<OptionsInput
				text="Street"
				placeholder={{ label: 'select Street', value: null }}
				itemSelect={[ { label: 'KG 10', value: 'KG 10' } ]}
				ViewStyle={styles.optionView}
				TextStyle={styles.street}
				InputStyles={styles.picker}
			/>
			<OptionsInput
				text="Building"
				itemSelect={[ { label: 'select Building', value: null } ]}
				placeholder={{ label: 'chez Edgar', value: 'Edgar' }}
				ViewStyle={styles.optionView}
				TextStyle={styles.building}
				InputStyles={styles.picker}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	viewRow: {
		flexDirection: 'row',
		marginVertical: 2
	},
	input: {
		borderBottomWidth: 1,
		width: '65%',
		height: 40,
		borderRadius: 13,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textOne: {
		margin: 10
	},
	textTwo: {
		margin: 10,
		marginRight: 30
	},
	textthre: {
		margin: 10,
		marginRight: 30
	},
	optionView: {
		flexDirection: 'row',
		marginVertical: 2,
		width: 500,
		height: 40
	},
	optionText: {
		margin: 10
	},
	district: {
		margin: 10,
		marginRight: 18
	},
	cell: {
		margin: 10,
		marginRight: 37
	},
	sector: {
		margin: 10,
		marginRight: 20
	},
	village: {
		margin: 10,
		marginRight: 17
	},
	street: {
		margin: 10,
		marginRight: 19
	},
	building: {
		margin: 10,
		marginRight: 10
	},
	text2: {
		color: 'grey',
		fontSize: 14,
		marginLeft: 10
	},
	edit: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5
	},
	editText: {
		color: 'blue',
		marginRight: 10
	},
	picker: {
		borderBottomWidth: 1,
		width: '50%',
		borderRadius: 16
	}
});
export default Text_Input;
