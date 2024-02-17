import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomButton from '../../UserCreationComponents/CustomButton'
import Constants from 'expo-constants'
import { selectedLanguage } from '../../Resources/Settings'

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    contentView: {
        marginVertical: Constants.statusBarHeight
    }
})

export default function SideMenu({onExitSesion}) {

    const language = selectedLanguage;
    const strings = language.MainPageScreen;

    function handleOnPress() {
        onExitSesion();
    }

  return (
    <View style={styles.container}>
        <View style={styles.contentView}>
            <CustomButton Title={strings.ExitSesion} onPress={handleOnPress}/>
        </View>
    </View>
  )
}
