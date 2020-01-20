import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";


export default function App() {

	const [userNumber, selectedNumberUpdate] = useState();
	const [gameOverRounds, gameOverRoundsUpdate] = useState(0);

	const startGamehandler = (selectedNumber) => {
		selectedNumberUpdate(selectedNumber);
	};

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
	}

});
