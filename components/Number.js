import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";


const Number = props => {

	return (
		<View style={styles.container}>
			<Text style={styles.number}>{props.children} </Text>
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
		fontSize: 22,
		color: Colors.accent
	}
});


export default Number;