import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import background from "./UserCreationComponents/background.jpg";
import chatIcon from "./HomeComponents/ChatIcon.png"
import Theme from './Theme';
import CustomButton from './UserCreationComponents/CustomButton';
import { settingsContext } from '../App';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: Theme.titleForeground,
        fontSize: 42,
        textAlign: 'center'
    },
    image: {
        backgroundColor: "#ffffff",
        height: 200,
        width: 200,
        alignSelf: 'center',
        borderRadius: 100,
        margin: 30,
        borderWidth: 4,
        borderColor: Theme.SecondaryColor
    },
    buttons: {
        marginHorizontal: 30
    }
})

export default function Home({navigation}) {

    const {language, setLanguage} = useContext(settingsContext)
    const [strings, setStrings] = useState(language.HomeScreen);

    useEffect(() => {
        setLanguage(language);
        setStrings(language.HomeScreen);
    }, [language])

    function navigateToRegisterPage() {
        navigation.navigate('Register');
    }

    function navigateToLoginPage() {
        navigation.navigate('Login');
    }

  return (
    <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>{strings.WelcomeToChatApp}</Text>
        <Image source={chatIcon} style={styles.image}/>
        <View style={styles.buttons}>
            <CustomButton Title={strings.SignUp} onPress={navigateToRegisterPage}/>
            <CustomButton Title={strings.Login} onPress={navigateToLoginPage}/>
        </View>
    </ImageBackground>
  )
}
