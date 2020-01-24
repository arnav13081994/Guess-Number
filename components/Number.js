import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";
import Defaultstyles from "../constants/Default-styles";


const Number = props => {

	return (
		<View style={{...styles.container, ...props.style}}>
			<Text style={{...Defaultstyles.titleText,...styles.number}}>{props.children} </Text>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: Colors.accent,
		padding: 5,
		borderRadius: 5,
		marginVertical: 10,
		width: 75,
		maxWidth: '50%',
		minWidth: 50
	},
	number: {
		color: Colors.accent,
		textAlign: 'center',
		fontSize: 20,
		margin: 5,
		padding: 5,
		alignItems: 'center'
	}
});


export default Number;