import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Card from "../components/Card";
import Number from "../components/Number";
import Defaultstyles from "../constants/Default-styles";
import Colors from "../constants/Colors";


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
				<Text> It took </Text>
				<Number> {props.count} tries </Number>
				<Text> Your Number was </Text>
				<Number> {props.userNumber}  </Number>
			</View>
			<Card style={styles.card}>
				<Button
					title='Start a new game?'
					onPress={resetGameHandler}
				/>
			</Card>
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
		justifyContent: 'center',
		marginVertical: 25
	},
	image: {
		width: '100%',
		height: '100%',
	},
	imageContainer: {
		width: 200,
		height: 200,
		marginTop: 10,
		padding: 0,
		borderRadius:50,
		borderColor: Colors.accent,
		borderWidth:2,
		overflow: 'hidden'
	}
});


export default GameOverScreen;