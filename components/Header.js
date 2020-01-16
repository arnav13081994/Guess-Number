import React from 'react';
import {View, Text, StyleSheet } from 'react-native';


const Header = props => {

	return (
		<View style={styles.HeaderStyle}>
			<Text style={styles.HeaderTitle}> {props.title} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	HeaderStyle: {
		width: '100%',
		alignItems: 'center',
		height: 90,
		backgroundColor: '#f7287b',
		paddingTop: 36,
		justifyContent: 'center'

	},
	HeaderTitle: {
		color: 'white',
		fontSize: 18,

	}

});

export default Header;