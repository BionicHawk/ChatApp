import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Alert } from "react-native";
import Theme from "./Theme";
import background from "./UserCreationComponents/background.jpg";
import CustomButton from "./UserCreationComponents/CustomButton";
import Field from "./UserCreationComponents/Field";
import { Users } from "./Api/Usuarios";
import { selectedLanguage } from "./Resources/Settings";

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 32,
    textAlign: "center",
  },
  loginCard: {
    backgroundColor: "#ffffff",
    margin: 30,
    borderRadius: 20,
    padding: 10,
  },
  background: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
  },
});

export default function Login({navigation}) {

    const language = selectedLanguage;
    const strings = language.LoginScreen;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function getEmail(value) {
    setEmail(value);
  }

  function getPass(value) {
    setPassword(value);
  }

  function authenticate() {
    const alertStrings = language.Alerts;
    const titles = alertStrings.titles;
    const messages = alertStrings.messages;

    if (email.length > 0 && password.length > 0) {
        const matchingUser = Users.find(user => user.email === email);
        if (matchingUser !== undefined) {
            if (matchingUser.password === password) {
                navigation.navigate('MainPage', {user: matchingUser});
                return;
            } 
            Alert.alert(titles.NotValidCredentials, messages.NotValidCredentials)
        }
        return;
    }
    Alert.alert(titles.EmptyFields, messages.EmptyFields);
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.loginCard}>
        <Text style={styles.mainTitle}>{strings.EnterCredentials}</Text>
        <Field
          labelText={strings.EmailLabel.Email}
          hint={strings.EmailLabel.hint}
          getText={getEmail}
        />
        <Field
          labelText={strings.PasswordLabel.Password}
          hint={strings.PasswordLabel.hint}
          getText={getPass}
        />
        <CustomButton Title={strings.Login} onPress={authenticate} />
      </View>
    </ImageBackground>
  );
}
