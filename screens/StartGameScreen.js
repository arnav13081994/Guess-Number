import React, {useState} from 'react';
import {Alert, View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";


const StartGameScreen = props => {

	const [textInput, textInputUpdate] = useState('');

	const inputValidator = textInputted => {

		// Replace everything that is not a number with ''

		textInputUpdate(textInputted.replace(/[^0-9]/g, ''));

	};


	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}> {props.title}</Text>
				<Card style={styles.inputContainer}>

					<Text> Select a Number</Text>
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
						<View style={styles.button}><Button title='Confirm' color={Colors.primary}/></View>
						<View style={styles.button}><Button title='Reset' color={Colors.accent}/></View>
					</View>

				</Card>

			</View>
		</TouchableWithoutFeedback>
	);

};


const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		width: '100%',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	button: {
		width: 100
	},
	textInputContainer: {
		width: 50,
		textAlign: 'center'
	}


});


export default StartGameScreen;