import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const ranNum = Math.floor(Math.random() * (max - min)) + min

    if (ranNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return ranNum
    }
}

const GameScreen = props => {

    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [rounds, setrounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumb = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setcurrentGuess(nextNumb)
        setrounds(currentRounds => currentRounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} />
            </Card>
        </View>
    )

}


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

})


export default GameScreen