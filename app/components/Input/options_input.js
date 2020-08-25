import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({ ViewStyle, TextStyle, text, InputStyles, placeholder, itemSelect }) => {
	return (
		<View style={ViewStyle}>
			<Text style={TextStyle}>{text}</Text>
			<View style={InputStyles}>
				<RNPickerSelect
					onValueChange={(value) => console.log(value)}
					placeholder={placeholder}
					items={itemSelect}
				/>
			</View>
		</View>
	);
};

export default Dropdown;
