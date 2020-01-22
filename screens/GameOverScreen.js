import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';


import Card from "../components/Card";
import Number from "../components/Number";
import Defaultstyles from "../constants/Default-styles";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";



const GameOverScreen = props => {

	const resetGameHandler = () => {
		props.countUpdate(0);
		props.userNumberUpdate();
	};

	return (
		<View style={styles.screen}>
			<Text style={{...Defaultstyles.titleText, fontSize: 22, marginTop: 50}}> GAME OVER!</Text>
			<Card style={styles.imageContainer}>
				<Image
					source={
						require('../assets/success.png')
					}
					style={styles.image}
				/>
			</Card>
			<View style={{...Defaultstyles.bodyText, ...styles.textcontainer}}>

				<View style={{...Defaultstyles.bodyText, ...styles.textViewcontainer}}>
					<Text> It took </Text>
					<Text style={{color: Colors.primary, fontFamily:'open-sans-bold'}}> {props.count} </Text>
					<Text> tries to guess your Number </Text>
				</View>

				<Number> {props.userNumber}  </Number>
			</View>
			<View style={styles.card}>
				<MainButton
					onPress={resetGameHandler}
				>Start a new game?
				</MainButton>
			</View>
		</View>
	);
};


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
	card: {
		justifyContent: 'center',
		marginBottom: 125,
	},
	textcontainer: {
		alignItems: 'center',
		marginVertical: 25
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius:100,
	},
	imageContainer: {
		width: 200,
		height: 200,
		marginTop: 10,
		padding: 5,
		borderRadius:100,
		borderColor: Colors.accent,
		// overflow: 'hidden'
	},
	textViewcontainer: {
		flexDirection: 'row',
		fontSize: 20,
	}
});


export default GameOverScreen;