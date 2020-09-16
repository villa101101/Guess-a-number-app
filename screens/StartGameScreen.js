import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/Colors'



const StarGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('')

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={() => { }} color={Colors.accent} />
                        </View>
                        <View>
                            <Button title="Confirm" onPress={() => { }} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:
    {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }

})


export default StarGameScreen





// import React from 'react'
// import { View, Text, StyleSheet } from 'react-native'

// const StarGameScreen = props => {

// }


// const styles = StyleSheet.create({

// })


// export default StarGameScreen