import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from "expo";


import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";


const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {

	const [userNumber, selectedNumberUpdate] = useState();
	const [gameOverRounds, gameOverRoundsUpdate] = useState(0);
	const [dataLoaded, dataLoadedUpdate] = useState(false);

	const renderScreenHandler = () => {
		dataLoadedUpdate(true);
	};

	const renderScreenErrorHandler = (error) => {
		console.log("Error occurred", error);
	};


	const startGamehandler = (selectedNumber) => {
		selectedNumberUpdate(selectedNumber);
	};


	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={renderScreenHandler}
				onError={renderScreenErrorHandler}
			/>
			);
	}


	let content = <StartGameScreen title="Start a new Game?" onStartGame={startGamehandler}  />;

	if (userNumber) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverRoundsUpdate} />
	}

	if (gameOverRounds) {
		content = <GameOverScreen
			count={gameOverRounds}
			userNumber={userNumber}
			countUpdate={gameOverRoundsUpdate}
			userNumberUpdate={selectedNumberUpdate}
		/>
	}

	return (

		<View style={styles.screen}>
			<Header title='Guess a Number!'/>
			{content}
		</View>

	);


};

const styles = StyleSheet.create({

	screen: {
		flex: 1,
		alignItems: 'center'
	}

});
