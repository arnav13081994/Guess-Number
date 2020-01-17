import React from 'react';
import {View, StyleSheet} from 'react-native';


const Card = props => {

	return (
		<View style={{...styles.card, ...props.style}}>
			{ props.children }
		</View>
	);
};


const styles = StyleSheet.create({
	card: {
		// shadow properties work only on iOS!
		shadowColor: 'black',
		shadowOpacity: 0.8,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 5,

		// elevation prop only works on Android!
		elevation: 5,

		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
	},
});

export default Card;