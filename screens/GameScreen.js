import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

import MainButton from "../components/MainButton";
import Number from "../components/Number";
import Card from "../components/Card";
import Defaultstyles from "../constants/Default-styles";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNumber = Math.floor(Math.random() * (max - min)) + min;

	if (rndNumber === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return rndNumber;
	}
};


const GameScreen = (props) => {
	const [currentGuess, currentGuessUpdate] = useState(generateRandomNumber(1, 100, props.userChoice));
	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	let numOfGuesses = useRef(0);


	const updateGuessGreater = () => {

		if ( currentGuess > props.userChoice ) {

			Alert.alert("Don\'t lie!", "You know this is not correct. Press Lower!", [{text: "Okay", style: "cancel"}]);
			return
		}

		currentLow.current = currentGuess;
		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
		currentGuessUpdate(nextNumber);
	};
	const updateGuessLower = () => {

		if ( currentGuess < props.userChoice ) {

			Alert.alert("Don\'t lie!", "You know this is not correct. Press Greater!", [{text: "Okay", style: "cancel"}]);
			return
		}

		currentHigh.current = currentGuess;
		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
		currentGuessUpdate(nextNumber);
	};

	useEffect( () => {

		numOfGuesses.current += 1;

		if ( currentGuess === props.userChoice ) {
			props.onGameOver(numOfGuesses.current);
		}

	});

	return (
		<View style={styles.screen}>

			<Text style={Defaultstyles.titleText}> Opponents Guess: </Text>

			<Number> {currentGuess} </Number>

			<Card style={styles.buttonContainer}>
				<MainButton onPress={updateGuessGreater}> GREATER </MainButton>
				<MainButton  onPress={updateGuessLower}> LOWER </MainButton>
			</Card>

		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	}


});


export default GameScreen;