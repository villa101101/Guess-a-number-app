import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

  const [userNumber, setuserNumber] = useState()
  const [guessRounds, setguessRounds] = useState(0)

  const configureNewGameHandler = () => {
    setguessRounds(0)
    setuserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber)
  }

  const gameOverHandler = numbOfRounds => {
    setguessRounds(numbOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen numberOfRoundsTaken={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
