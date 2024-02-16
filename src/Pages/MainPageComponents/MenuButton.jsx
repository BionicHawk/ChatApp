import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import MenuIcon from './MenuIcon.png';

const style = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        margin: 10,
    },
    container: {
        padding: 10,
    }
})

export default function MenuButton({onPress}) {
    
    function handleOnPress() {
        onPress();
    }
  
    return (
    <TouchableOpacity onPress={handleOnPress} style={style.container}>
        <Image source={MenuIcon} style={style.image}/>
    </TouchableOpacity>
  )
}
