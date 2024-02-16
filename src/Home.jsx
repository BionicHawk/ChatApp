import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import background from "./UserCreationComponents/background.jpg";
import chatIcon from "./HomeComponents/ChatIcon.png"
import Theme from './Theme';
import CustomButton from './UserCreationComponents/CustomButton';

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

    function navigateToRegisterPage() {
        navigation.navigate('Register');
    }

    function navigateToLoginPage() {
        navigation.navigate('Login');
    }

  return (
    <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Bienvenido a ChatApp</Text>
        <Image source={chatIcon} style={styles.image}/>
        <View style={styles.buttons}>
            <CustomButton Title="Registrarse" onPress={navigateToRegisterPage}/>
            <CustomButton Title="Inciar Sesión" onPress={navigateToLoginPage}/>
        </View>
    </ImageBackground>
  )
}
