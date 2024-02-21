import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ImageBackground,
} from "react-native";
import Field from "./UserCreationComponents/Field";
import UserIcon from "./UserCreationComponents/UserIcon.png";
import Theme from "./Theme";
import CustomButton from "./UserCreationComponents/CustomButton";
import Background from "./UserCreationComponents/background.jpg";
import { User, Users } from "./Api/Usuarios";
import { settingsContext } from "../App";

const style = StyleSheet.create({
  mainTitle: {
    fontSize: 32,
    textAlign: "center",
  },
  image: {
    height: 128,
    width: 128,
    borderWidth: 3,
    borderColor: Theme.SecondaryColor,
    borderRadius: 64,
    alignSelf: "center",
  },
  loginCard: {
    backgroundColor: "#ffffff",
    margin: 30,
    borderRadius: 20,
    padding: 10,
    elevation: 20
  },
  background: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
  },
});

export default function UserCreation({navigation}) {

  const {language, setLanguage} = useContext(settingsContext)
  const [strings, setStrings] = useState(language.UserCreation);
  const [alertStrings, setAlertStrings] = useState(language.Alerts);

  useEffect(() => {
    setLanguage(language);
    setStrings(language.UserCreation);
    setAlertStrings(language.Alerts);
  }, [language])

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");

  function getUsuario(value) {
    setNombreUsuario(value);
  }

  function getCorreo(value) {
    setCorreo(value);
  }

  function getPassword(value) {
    setPassword(value);
  }

  function getConfirmPass(value) {
    setConfirmedPass(value);
  }

  function findMatchingUser(user) {
    for (let i = 0; i < Users.length; ++i) {
      const matchingUser = Users[i];
      if (matchingUser.name === user.name || matchingUser.email === user.email) {
        return matchingUser;
      }
    }
    return undefined;
  }

  function CrearCuenta() {
    const titles = alertStrings.titles;
    const messages = alertStrings.messages;
    if (nombreUsuario.length > 0 && correo.length > 0 && password.length > 0) {
      if (password !== confirmedPass) {
        Alert.alert(titles.NotMatchingPassword, messages.NotMatchingPassword)
        return;
      }

      const Usuario = new User(nombreUsuario, correo, password);
      const matchedUser = findMatchingUser(Usuario);

      if (matchedUser !== undefined) {
        if (matchedUser.name === Usuario.name) {
          Alert.alert(titles.AlreadyExistingUsername, messages.AlreadyExistingUsername);
        } else {
          Alert.alert(titles.AlreadyExistingEmail, messages.AlreadyExistingEmail);
        }
        return;
      }

      Users.push(Usuario);
      Alert.alert(titles.CreatedUser, messages.CreatedUser);

      navigation.goBack();

      return;
    }
    Alert.alert(titles.NotValidInfo, messages.NotValidInfo);
  }

  return (
    <ImageBackground style={style.background} source={Background}>
      <View style={style.loginCard}>
        <Text style={style.mainTitle}>{strings.CreateYourAccount}</Text>
        <Image style={style.image} source={UserIcon} />
        <Field
          labelText={strings.UsernameLabel.Username}
          hint={strings.UsernameLabel.hint}
          getText={getUsuario}
        />
        <Field
          labelText={strings.EmailLabel.Email}
          hint={strings.EmailLabel.hint}
          getText={getCorreo}
        />
        <Field
          labelText={strings.PasswordLabel.Password}
          hint={strings.PasswordLabel.hint}
          getText={getPassword}
        />
        <Field 
          labelText={strings.ConfirmPassword.ConfirmPassword}
          hint={strings.ConfirmPassword.hint}
          getText={getConfirmPass}
        />
        <CustomButton Title={strings.CreateAccount} onPress={CrearCuenta} />
      </View>
    </ImageBackground>
  );
}
