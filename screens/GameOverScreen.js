import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import Card from '../components/Card'

import Colors from '../constants/Colors'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <View style={styles.heading}>
                    <Text>The Game is Over!</Text>
                </View>

                <Text style={styles.roundsText}>Number of rounds: {props.numberOfRoundsTaken}</Text>
                <Text style={styles.providedNumberText}>Number was: {props.userNumber}</Text>
                <Button title="New Game" onPress={props.onRestart} />
            </Card>
        </View>


    )

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        padding: 6
    },
    roundsText: {
        color: Colors.primary
    },
    providedNumberText: {
        color: Colors.accent
    },
    card: {
        alignItems: 'center'
    }

})


export default GameOverScreen