import React , {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Picker} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


const PhoneNumber = () => {
	const [selectedValue, setSelectedValue] = useState("+94");
   return(
   	<View style={styles.lbg}>
   	<Text style={styles.text1}>WhatsApp Messenger</Text>
   	<Text style={styles.text2}>Enter your mobile number to Login or Register</Text>
   	<View style={styles.phno} >
   	<View style={styles.container}>
     <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 100 }}
        mode="dialog"
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="+91" value="+91" />
        <Picker.Item label="+92" value="+92" />
        <Picker.Item label="+94" value="+94" />
      </Picker>
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