import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";
import Defaultstyles from "../constants/Default-styles";


const Number = props => {

	return (
		<View style={styles.container}>
			<Text style={{...Defaultstyles.titleText,...styles.number}}>{props.children} </Text>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {

		borderWidth: 2,
		borderColor: Colors.accent,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginVertical: 10
	},
	number: {
		color: Colors.accent
	}
});


export default Number;