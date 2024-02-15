import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Theme from '../Theme'

const style = StyleSheet.create({
    button: {
        marginTop: 8,
        backgroundColor: Theme.AccentColor,
        borderRadius: 10
    },
    buttonTitle: {
        color: Theme.buttonForeground,
        textAlign: 'center',
        fontSize: 16,
        padding: 16,
        fontWeight: 'bold'
    }
})

export default function CustomButton({Title, onPress}) {

    function handleOnPress() {
        onPress();
    }

  return (
    <TouchableOpacity onPress={handleOnPress}>
        <View style={style.button}>
            <Text style={style.buttonTitle}>{Title}</Text>
        </View>
    </TouchableOpacity>
  )
}
