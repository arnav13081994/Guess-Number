import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";

const MainButton = props => {

	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={{...styles.buttonContainer, ...props.style}}>

				<Text style={styles.buttonText}> {props.children} </Text>

			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

	buttonContainer: {
		backgroundColor: Colors.primary,
		padding: 10,
		borderRadius: 25,
	},
	buttonText: {
		color: 'white',
		fontFamily: 'open-sans',
		fontSize: 18
	}

});


export default MainButton;