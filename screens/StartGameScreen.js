import React, {useState} from 'react';
import {Alert, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, ScrollView} from 'react-native';


import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
import Defaultstyles from "../constants/Default-styles";
import MainButton from "../components/MainButton";
import {Entypo, Feather} from "@expo/vector-icons";


const StartGameScreen = props => {

	const [textInput, textInputUpdate] = useState('');
	const [confirmed, confirmedUpdate] = useState(false);
	const [selectedNumber, selectedNumberUpdate] = useState();

	const inputValidator = textInputted => {
		// Replace everything that is not a number with ''
		textInputUpdate(textInputted.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		textInputUpdate("");
		confirmedUpdate(false);
		Keyboard.dismiss();
	};

	const dismissKeyboardHandler = () => {
		Keyboard.dismiss();
	};

	const confirmedInputHandler = () => {
		confirmedUpdate(true);

		const chosenNumber = parseInt(textInput);

		if (chosenNumber <= 0 || isNaN(chosenNumber) || chosenNumber > 99) {
			Alert.alert('Invalid Number!',
				'Please enter a number between 1 and 99',
				[{
					text: "Okay",
					style: "destructive",
					onPress: resetInputHandler()
				}]
			);
			return;
		}

		// Please note that we can access textIjnput even though it has been set to '' because that would only
		// get updated when the component is re-rendered and these 3 updates will get batched so that the
		// component is only re-rendered once!

		selectedNumberUpdate(chosenNumber);
		textInputUpdate('');
		dismissKeyboardHandler();
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = <Card style={styles.summaryContainer}>
			<Text> You Selected </Text>
			<Number> {selectedNumber} </Number>
			<MainButton onPress={() => props.onStartGame(selectedNumber)}>
				START GAME
			</MainButton>

		</Card>
	}

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={dismissKeyboardHandler}>
				<View style={styles.screen}>
					<Text style={{...Defaultstyles.titleText, ...styles.title}}> {props.title}</Text>
					<Card style={styles.cardContainer}>

						<Text style={Defaultstyles.bodyText}> Select a Number: </Text>
						<Input
							style={styles.textInputContainer}
							autoCorrect={false}
							keyboardType="number-pad"
							maxLength={2}
							autoCapitalize='none'
							blurOnSubmit
							onChangeText={inputValidator}
							value={textInput}
						/>

						<View style={styles.buttonContainer}>
							<MainButton onPress={confirmedInputHandler} style={styles.button}>
								<Feather name="check" size={20} color="white"/>
							</MainButton>

							<MainButton onPress={resetInputHandler} style={styles.button}>
								<Entypo name="cross" size={20} color="white"/>
							</MainButton>
						</View>

					</Card>
					{confirmedOutput}

				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);

};


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		marginTop: '5%'
	},
	buttonContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		width: '100%',
		justifyContent: 'space-evenly'
	},
	title: {
		marginVertical: 10
	},
	cardContainer: {
		minWidth: 200,
		maxWidth: '95%',
		width: '80%',
		alignItems: 'center',
		marginTop: 20
	},
	button: {
		width: 75,
		alignItems: 'center',
	},
	textInputContainer: {
		width: 50,
		textAlign: 'center'
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	}
});


export default StartGameScreen;