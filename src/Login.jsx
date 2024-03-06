import React, { useContext, useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Alert } from "react-native";
import background from "./UserCreationComponents/background.jpg";
import CustomButton from "./UserCreationComponents/CustomButton";
import Field from "./UserCreationComponents/Field";
import { User, Users } from "./Api/Usuarios";
import { settings } from "./Resources/Settings";
import { settingsContext } from "../App";

// Se crean los estilos para esta pantalla
const styles = StyleSheet.create({
  // Este estilo se aplicara al titulo principal
  mainTitle: {
    fontSize: 32,
    textAlign: "center",
  },
  // Este estilo se aplica a el contenedor del formulario
  loginCard: {
    backgroundColor: "#ffffff",
    margin: 30,
    borderRadius: 20,
    padding: 10,
    elevation: 20,
  },
  // Este estilo se aplica a el fondo de la pantalla
  background: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
  },
});

export default function Login({ navigation }) {
  const {language, setLanguage} = useContext(settingsContext);
  const [strings, setStrings] = useState(language.LoginScreen);
  const [alertStrings, setAlertStrings] = useState(language.Alerts);

  useEffect(() => {
    setLanguage(language);
    setStrings(language.LoginScreen);
    setAlertStrings(language.Alerts);
  }, [language]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Está función se encarga de obtener el correo electrónico y actualizar 
     el estado del correo electrónico */
  function getEmail(value) {
    // Actualiza el estado del correo electrónico
    setEmail(value);
  }

  /* Está función se encarga de obtener la contraseña y atualizar el
     estado de la contraseña */
  function getPass(value) {
    // Actualiza el estado de la contraseña
    setPassword(value);
  }

  /* Está función se encarga de autenticar al usuario y en el caso que 
     la autenticación haya sido exitosa se lanza una alerta al usuario
     indicandole que se autenticó correctamente */
  function authenticate() {
    const titles = alertStrings.titles;
    const messages = alertStrings.messages;

    console.log(`${email}: ${password}`)
    
    for (let i = 0; i < Users.length; ++i) {
      const user = Users[i];
      console.log(JSON.stringify(user))
    }

    // Comprueba que el correo electrónico y la contraseña no esten vacíos
    if (email.length > 0 && password.length > 0) {
      const matchingUser = Users.find((user) => user.email === email);
      if (matchingUser !== undefined) {
        if (matchingUser.password === password) {
          navigation.navigate("MainPage", { user: matchingUser });
          return;
        }
        Alert.alert(titles.NotValidCredentials, messages.NotValidCredentials);
      }
      return;
    }
    /* Se le manda una alerta al usuario indicandole que los campos 
        están vacíos */
    Alert.alert(titles.EmptyFields, messages.EmptyFields);
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      {/* Se declara el contenedor del formulario */}
      <View style={styles.loginCard}>
        {/* Se declara el titulo principal de la pantalla */}
        <Text style={styles.mainTitle}>{strings.EnterCredentials}</Text>
        {/* Se renderiza el campo del correo electrónico y se le da
            acceso a la función para obtener el correo electrónico */}
        <Field
          labelText={strings.EmailLabel.Email}
          hint={strings.EmailLabel.hint}
          getText={getEmail}
        />
        {/* Se renderiza el campo del contraseña y se le da
            acceso a la función para obtener la contraseña */}
        <Field
          labelText={strings.PasswordLabel.Password}
          hint={strings.PasswordLabel.hint}
          getText={getPass}
        />
        {/* Se renderiza el boton de iniciar sesión que ejecuta
            la función de autenticación */}
        <CustomButton Title={strings.Login} onPress={authenticate} />
      </View>
    </ImageBackground>
  );
}
