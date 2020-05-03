import React , {useState} from 'react';
import {Text, View, StyleSheet, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';


const PhoneNumber = () => {
   return(
   	<View style={styles.lbg}>
   	<Text style={styles.text1}>WhatsApp Messenger</Text>
   	<Text style={styles.text2}>Enter your mobile number to Login or Register</Text>
   	<View style={styles.phno} >
   	<View style={styles.container}>
     <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '+91', value: '+91' },
                { label: '+92', value: '+92' },
                { label: '+94', value: '+94' },
            ]}
        />
      </View>
   	<TextInput 
    placeholder="Your Mobile Number"
    keyboardType={'numeric'}
   	style={styles.text4}/>
   	</View>
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
	phin : {
		marginLeft : 40
	},
	text3: {
      fontSize: 18,
      fontWeight: '900',
      margin : 8
	},
	icon : {
		marginTop: 13,
		marginRight: 10
	},
	text4 :
	{   
		fontSize: 18,
		paddingLeft: 10,
		borderWidth : 1,
		marginLeft: 10,
		marginRight : 10,
		paddingRight:20,
		borderRadius : 5,
		borderColor : '#dcdcdc'
	},
	phno : {
		flexDirection : 'row',
		marginTop : 20,
		justifyContent : 'flex-start',
		marginLeft: 20
	},
	 container: {
	 	flex : 1,
    borderWidth: 1,
		borderColor: '#dcdcdc',
		borderRadius:5
  }
});

export default PhoneNumber;