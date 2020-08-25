import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ioncons from 'react-native-vector-icons/Ionicons';

const App = () => {
	return (
		<View>
			<AntDesign name={'home'} size={30} />
			<Feather name={'package'} size={30} />
			<Ioncons name={'md-notifications-outline'} size={30} />
			<Feather name={'settings'} size={30} />
		</View>
	);
};

export default App;
