import React from 'react';
import {View,Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
 
const Dropdown = ({ViewStyle,TextStyle,text, InputStyles}) => {
    return (
        <View style={ViewStyle}>
             <Text style={TextStyle}>{text}</Text>
        <View style={InputStyles}>
        <RNPickerSelect 
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Kigali city', value: 'kigali city' },
                { label: 'Northern province', value: 'nothern province' },
                { label: 'Southern province', value: 'southern province ' },
            ]}
        />
        </View>
        </View>
    );
};



export default Dropdown;