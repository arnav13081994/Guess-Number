import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";


export default function App() {

	const [userNumber, selectedNumberUpdate] = useState();
	const [gameOver, gameOverUpdate] = useState(false);

	const startGamehandler = (selectedNumber) => {
		selectedNumberUpdate(selectedNumber);
	};

	let content = <StartGameScreen title="Start a new Game?" onStartGame={startGamehandler}  />;

	if (userNumber) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverUpdate} />
	}

	if (gameOver) {
		content = <GameOver />
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
