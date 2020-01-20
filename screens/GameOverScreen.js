import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import Card from "../components/Card";


const GameOverScreen = props => {

	const resetGameHandler = () => {

		props.countUpdate(0);
		props.userNumberUpdate();

	};

	return (
		<Card>
			<Text> GAME OVER!</Text>
			<Text> It took {props.count} guesses </Text>
			<Text> Number was {props.userNumber}  </Text>
			<Button
				title='Start a new game?'
				onPress={resetGameHandler}
			/>
		</Card>


	);

};


const styles = StyleSheet.create({});


export default GameOverScreen;