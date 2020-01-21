import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from "../components/Card";
import Number from "../components/Number";
import Defaultstyles from "../constants/Default-styles";

const GameOverScreen = props => {

	const resetGameHandler = () => {
		props.countUpdate(0);
		props.userNumberUpdate();
	};

	return (
		<View style={styles.screen}>
			<Text style={{...Defaultstyles.titleText, fontSize:22, marginTop: 100}}> GAME OVER!</Text>
			<View style={{...Defaultstyles.bodyText,...styles.textcontainer}}>
				<Text> It took  </Text>
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
		marginVertical: 50

	}
});


export default GameOverScreen;