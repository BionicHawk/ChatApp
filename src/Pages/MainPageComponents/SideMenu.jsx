import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomButton from '../../UserCreationComponents/CustomButton'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    contentView: {
        marginVertical: Constants.statusBarHeight
    }
})

export default function SideMenu({onExitSesion}) {

    function handleOnPress() {
        onExitSesion();
    }

  return (
    <View style={styles.container}>
        <View style={styles.contentView}>
            <CustomButton Title="Salir de la sesión" onPress={handleOnPress}/>
        </View>
    </View>
  )
}
