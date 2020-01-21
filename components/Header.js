import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Colors from "../constants/Colors";
import Defaultstyles from "../constants/Default-styles";


const Header = props => {

	return (
		<View style={styles.headerStyle}>
			<Text style={{...Defaultstyles.titleText, ...styles.headerTitle}}> {props.title} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		width: '100%',
		alignItems: 'center',
		height: 90,
		backgroundColor: Colors.primary,
		paddingTop: 36,
		justifyContent: 'center'

	},
	headerTitle: {
		color: 'white',
	}

});

export default Header;