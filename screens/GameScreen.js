import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import Number from "../components/Number";
import Card from "../components/Card";

const generateRandomNumber = (min ,max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNumber = Math.floor(Math.random()*(max-min)) + min;

	if (rndNumber === exclude ) {
		return generateRandomNumber(min ,max, exclude);
	} else {
		return rndNumber;
	}
};


const updateGuess = () => {


};

const GameScreen = (props) => {
	const [currentGuesss, currentGuesUpdate ] = useState(generateRandomNumber(1, 100, props.userChoice));

	return (
		<View style={styles.screen}>

			<Text> Opponents Guess: </Text>

			<Number> {currentGuesss} </Number>

			<Card style={styles.buttonContainer}>
				<Button title='Greater' onPress={updateGuess}/>
				<Button title='Lower' onPress={updateGuess}/>
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