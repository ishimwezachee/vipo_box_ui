import React from 'react';
import { View,Image,StyleSheet,Text } from 'react-native';
import Button from '../components/Button/button';
import Input from "../components/Input/input";


// const width = Dimensions.get('window').width;

const App = ()=>{
	const onPress =()=>{
		alert('clicked')
	}
	
	return (
		<View>
        <View style={styles.logoStyle}>
		<Image
          source={require('../assets/images/vipobox.png')}
		  />
		</View>
		<Input
			text='Phone number or email'
			value='47484848'
		/>
		<Input
			text='Password'
			value='47484848'
		/>
		<View style={styles.LoginButtonStyle}>
		<Button
             text='Login into the box'
			 onPress={onPress}
			/>
					<Button
             text='Client'
			 onPress={onPress}
			/>
					<Button
             text='Agent'
			 onPress={onPress}
			/>
		<Button
             text='Point'
			 onPress={onPress}
			/>
		</View>
			<Text style={styles.PasswordTextStyle}>Forget password?</Text>
			<View style={styles.bottomTextStyle}>
             <Text style={styles.bottomTextStyle}>Don't have a box? Create it</Text>
			</View>
		</View>
	)
}


const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center'
	},
	logoStyle:{
		alignItems:'center',
		marginVertical: 80,

	},
	LoginButtonStyle:{
		marginVertical:12,
		flexDirection: 'row',
		marginHorizontal: 13,
	},
	PasswordTextStyle:{
		marginHorizontal: 20,
		fontSize:12
	},
	bottomTextStyle:{
		color:"#3F51B5",
		fontSize:14,
		alignItems:'center',
		marginVertical:25,
		fontWeight:'bold'
	}
})

export default App;
