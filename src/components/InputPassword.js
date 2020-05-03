import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const PhoneNumber = () => {
   return(
   	<View style={styles.lbg}>
   	<Text style={styles.text1}>Password</Text>
   	<Text style={styles.text2}>Enter your password to login</Text>
   	<TextInput
    placeholder="Your Password"
    secureTextEntry={true}
   	style={styles.text4}/>
   	</View>
	);
};

const styles=StyleSheet.create({
	lbg : {
		backgroundColor : '#ffffff',
		marginTop : 10,
		marginLeft : 10,
		marginRight : 10,
		borderTopLeftRadius : 5,
		borderTopRightRadius : 5
	},
	text1 : {
		fontWeight : 'bold',
		marginTop : 22,
		marginLeft : 20,
		marginRight : 10,
		fontSize : 20
	},
	text2 : {
		marginTop : 3,
		marginLeft : 20,
		marginRight : 10,
		marginBottom : 7,
		fontSize : 14
	},
	text4 :
	{   
		fontSize: 18,
		paddingLeft: 10,
		borderWidth : 1,
		marginTop : 10,
		marginLeft: 20,
		marginRight : 10,
		paddingTop: 10,
		paddingBottom : 10,
		borderRadius : 5,
		borderColor : '#dcdcdc'
	}
});

export default PhoneNumber;