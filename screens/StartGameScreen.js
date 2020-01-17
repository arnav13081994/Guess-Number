import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/Colors";

const StartGameScreen = props => {

	return (
		<View style = {styles.screen}>
			<Text style={styles.title}> {props.title}</Text>
			<Card style={styles.inputContainer}>

				<Text> Select a Number</Text>
				<TextInput




				/>

				<View style={styles.buttonContainer}>
					<View style={styles.button}><Button  title='Confirm' color={Colors.primary}  /></View>
					<View style={styles.button}><Button title='Reset' color={Colors.accent}  /></View>
				</View>

			</Card>

		</View>
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
	}



});


export default StartGameScreen;