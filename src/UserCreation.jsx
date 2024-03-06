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

// Estos son los estilos que se van a insertar en los componentes
const style = StyleSheet.create({
  // Este estilo va para el titulo principal
  mainTitle: {
    fontSize: 32,
    textAlign: "center",
  },
  // Este estilo va para la imagen de presentación
  image: {
    height: 128,
    width: 128,
    borderWidth: 3,
    borderColor: Theme.SecondaryColor,
    borderRadius: 64,
    alignSelf: "center",
  },
  // Este es el estilo del contenedor del formulario de Creación de Cuenta
  loginCard: {
    backgroundColor: "#ffffff",
    margin: 30,
    borderRadius: 20,
    padding: 10,
    elevation: 20
  },
  // Este es el estilo de la imagen de fondo
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
  // Este es el controlador de estado del correo electronico
  const [correo, setCorreo] = useState("");
  // Este es el controlador de estado de la contraseña
  const [password, setPassword] = useState("");
  // Este es el controlador de estado de confirmar contraseña
  const [confirmedPass, setConfirmedPass] = useState("");

  // Esta función se encarga de obtener el nombre de usuario
  function getUsuario(value) {
    // Actualiza el estado del nombre de usuario
    setNombreUsuario(value);
  }

  // Está función se encarga de obtener el correo electrónico
  function getCorreo(value) {
    // Actualiza el estado del correo electrónico
    setCorreo(value);
  }

  // Está función se encarga de obtener la contraseña
  function getPassword(value) {
    // Actualiza el estado de la contraseña
    setPassword(value);
  }

  // Está función se encarga de obtener la contraseña de confirmación
  function getConfirmPass(value) {
    // Actualiza el estado de confirmar contraseña
    setConfirmedPass(value);
  }

  /* Está función se encarga de buscar en la base de datos un usuario que 
     coincida con el usuario que se pasa como párametro */
  function findMatchingUser(user) {
    // Recorre todos los usuarios
    for (let i = 0; i < Users.length; ++i) {
      // se obtiene la referencia del usuario
      const matchingUser = Users[i];
      // Se comprueba si el usuario tiene el mismo nombre o correo electrónico
      if (matchingUser.name === user.name || matchingUser.email === user.email) {
        // En caso de que sí se devuelve el usuario que coincide
        return matchingUser;
      }
    }
    // No devuelve nada puesto que no hubo coincidencias
    return undefined;
  }

  // Está función se encarga de crear la cuenta de usuario
  function CrearCuenta() {
    const titles = alertStrings.titles;
    const messages = alertStrings.messages;
    /* Comprueba si el nombre de usuario, correo electrónico y contraseña
       no están vacíos */
    if (nombreUsuario.length > 0 && correo.length > 0 && password.length > 0) {
      // Comprueba si la contraseña dada no coincide en ambos campos de la contraseña
      if (password !== confirmedPass) {
        // Se le indica al usuario que la contraseña no conicide
        Alert.alert(titles.NotMatchingPassword, messages.NotMatchingPassword)
        // Se sale de la función
        return;
      }
      
      // Se crea el objeto de usuario con los datos dados
      const Usuario = new User(nombreUsuario, correo, password);
      // Se busca una coincidencia al usuario que se está creando 
      const matchedUser = findMatchingUser(Usuario);

      // Comprueba si matchUser contiene algo
      if (matchedUser !== undefined) {
        if (matchedUser.name === Usuario.name) {
          /* Le indica al usuario que ya hay un usuario con el mismo nombre 
             de usuario */
          Alert.alert(titles.AlreadyExistingUsername, messages.AlreadyExistingUsername);
        } else {
          // Le indica al usuario que el correo electrónico no se puede usar
          Alert.alert(titles.AlreadyExistingEmail, messages.AlreadyExistingEmail);
        }
        // Sale de la función
        return;
      }

      // Agrega al usuario a la base de datos
      Users.push(Usuario);
      Alert.alert(titles.CreatedUser, messages.CreatedUser);

      navigation.goBack();
      // Sale de la función
      return;
    }
    /* Le indica al usuario que la información que proporcionó 
       para que lo vuelva a intentar */
    Alert.alert(titles.NotValidInfo, messages.NotValidInfo);
  }

  return (
    <ImageBackground style={style.background} source={Background}>
      {/* Se declara espacio que va a contener el formulario */}
      <View style={style.loginCard}>
        {/* Se declara el titulo principal */}
        <Text style={style.mainTitle}>{strings.CreateYourAccount}</Text>
        {/* Se declara la imagen de presentación */}
        <Image style={style.image} source={UserIcon} />
        {/* Se declara el campo donde el usuario ecribirá el nombre de usuario, 
            se le da acceso a la función que obtiene el nombre de usuario */}
        <Field
          labelText={strings.UsernameLabel.Username}
          hint={strings.UsernameLabel.hint}
          getText={getUsuario}
        />
        {/* Se declara el campo donde el usuario ecribirá el Correo Electrónico, 
            se le da acceso a la función que obtiene el Correo Electrónico */}
        <Field
          labelText={strings.EmailLabel.Email}
          hint={strings.EmailLabel.hint}
          getText={getCorreo}
        />
        {/* Se declara el campo donde el usuario ecribirá la contraseña, 
            se le da acceso a la función que obtiene la contraseña */}
        <Field
          labelText={strings.PasswordLabel.Password}
          hint={strings.PasswordLabel.hint}
          getText={getPassword}
        />
        {/* Se delcara el campo donde el usuario repetirá su contraseña,
            se le da acceso a la función que obtiene la contraseña repetida */}
        <Field 
          labelText={strings.ConfirmPassword.ConfirmPassword}
          hint={strings.ConfirmPassword.hint}
          getText={getConfirmPass}
        />
         {/* Se declara el botón que ejecutará la función de Crear cuenta */}
        <CustomButton Title={strings.CreateAccount} onPress={CrearCuenta} />
      </View>
    </ImageBackground>
  );
}
