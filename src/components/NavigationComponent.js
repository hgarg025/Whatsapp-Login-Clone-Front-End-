import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const NavigationComponent = ({navigation,content,nvgt}) => {
   return(
   	<View style={styles.container} >
   	<TouchableOpacity>
   	<Text style={styles.text1}>{content}</Text>
   	</TouchableOpacity>
   	<TouchableOpacity onPress={() => navigation.navigate(nvgt)}>
   	<MaterialCommunityIcons
    name="arrow-right-circle"
    size={70} 
    color="#24d269"
    style={styles.icon}
   	/>
   	</TouchableOpacity>
   	</View>
	);
};

const styles=StyleSheet.create({
container : {
	flexDirection: 'row',
	backgroundColor : '#ffffff',
		marginLeft : 10,
		marginRight : 10,
		borderBottomLeftRadius : 5,
		borderBottomRightRadius : 5,	    
        elevation: 1,
        justifyContent : 'space-between'
}	,
text1 : {
	fontWeight : 'bold',
		marginTop : 50,
		marginBottom : 50,
		marginLeft : 20,
		marginRight : 10,
		fontSize : 17
},
icon : {
	marginTop : 25,
	marginRight : 15
}
});

export default withNavigation(NavigationComponent);