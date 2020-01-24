import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, Image, ScrollView} from 'react-native';
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

	// TODO Make the Returned JsX style dynamic by using the ternary operator etc and test it on 4 sizes: Small and Big Android & iOS

	return (
			<FlatList
				data={pastGuesses}
				contentContainerStyle={{
					width: '95%',
					maxWidth: '99%',
					minWidth: 200,
				}}
				ListEmptyComponent={
					<View>
						<Text>NO ITEMS</Text>
						<Image
							source={require("../assets/shrug.png")}
						/>
					</View>
				}
				renderItem={
					item => {
						// console.log(item);
						return (
							<Card style={
								{
									...Defaultstyles.bodyText,
									marginVertical: 5,
									padding: 10,
									borderWidth: 1,
									alignItems: 'center',
									elevation: 3,
									shadowRadius: 3,
								}
							}>
								<Text>
									<Text style={{fontWeight: '800'}}>
										Round {item.index + 1}
									</Text>
									: {item.item.value}
								</Text>
							</Card>
						);
					}
				}

				ListHeaderComponent={
							<View style={styles.screen}>

								<Text style={{...Defaultstyles.titleText, marginTop: '10%', alignItems: 'center',}}> Opponents Guess: </Text>

								<Number> {currentGuess} </Number>

								<Card style={styles.buttonContainer}>
									<MainButton onPress={updateGuessGreater}>
										<Ionicons name="md-add" size={24} color="white"/>
									</MainButton>
									<MainButton onPress={updateGuessLower}>
										<Ionicons name="md-remove" size={24} color="white"/>
									</MainButton>
								</Card>
								<Text style={{...Defaultstyles.titleText, marginVertical: 25}}> {numOfGuesses.current + 1} Guesses so far: </Text>

							</View>
				}
			/>

	);
};

const styles = StyleSheet.create({
	screen: {
		alignItems: 'center',
		justifyContent: 'center'
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