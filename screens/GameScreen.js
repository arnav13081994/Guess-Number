import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


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
	const initialGuess = generateRandomNumber(1, 100, props.userChoice);
	const [currentGuess, currentGuessUpdate] = useState(initialGuess);
	const [pastGuesses, pastGuessesUpdate] = useState([
		{
			key: initialGuess.toString(),
			value: initialGuess
		}
		]
	);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	let numOfGuesses = useRef(0);


	const updatePastGuessesHandler = (guess) => {
		pastGuessesUpdate([
			...pastGuesses, {
				key: guess.toString(), value: guess
			}
		]);
	};

	const updateGuessGreater = () => {

		if (currentGuess > props.userChoice) {

			Alert.alert("Don\'t lie!", "You know this is not correct. Press Lower!", [{text: "Okay", style: "cancel"}]);
			return
		}

		currentLow.current = currentGuess + 1;
		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
		currentGuessUpdate(nextNumber);

		// Update the Past Guesses Array
		updatePastGuessesHandler(nextNumber);

	};
	const updateGuessLower = () => {

		if (currentGuess < props.userChoice) {

			Alert.alert("Don\'t lie!", "You know this is not correct. Press Greater!", [{
				text: "Okay",
				style: "cancel"
			}]);
			return
		}

		currentHigh.current = currentGuess;
		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
		currentGuessUpdate(nextNumber);

		// Update the Past Guesses Array
		updatePastGuessesHandler(nextNumber);

	};

	useEffect(() => {

		numOfGuesses.current += 1;

		if (currentGuess === props.userChoice) {
			props.onGameOver(numOfGuesses.current);
		}

	});


	return (
		<View style={styles.screen}>

			<Text style={Defaultstyles.titleText}> Opponents Guess: </Text>

			<Number> {currentGuess} </Number>

			<Card style={styles.buttonContainer}>
				<MainButton onPress={updateGuessGreater}>
					<Ionicons name="md-add" size={24} color="white"/>
				</MainButton>
				<MainButton onPress={updateGuessLower}>
					<Ionicons name="md-remove" size={24} color="white"/>
				</MainButton>
			</Card>
			<Text style={Defaultstyles.titleText}> Guesses so far: </Text>
			<FlatList
				data={pastGuesses}
				ListEmptyComponent={<View><Text>NO ITEMS</Text></View>} //TODO Needs to be styles in a better way. Show some image instead.
				renderItem={
					item => {
						return (
							<View>
								<Text> {item.item.value} </Text>
							</View>
						);
					}
				}
			/>

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