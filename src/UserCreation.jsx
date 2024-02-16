import React, { useState } from "react";
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
  },
  background: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
  },
});

export default function UserCreation({navigation}) {
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
    if (nombreUsuario.length > 0 && correo.length > 0 && password.length > 0) {

      if (password !== confirmedPass) {
        Alert.alert("¡La contraseña no coincide!", "La contraseña que proporcionó en los campos no coinicide")
        return;
      }

      const Usuario = new User(nombreUsuario, correo, password);
      const matchedUser = findMatchingUser(Usuario);

      if (matchedUser !== undefined) {
        const defaultMsg = "Intentelo de nuevo";
        if (matchedUser.name === Usuario.name) {
          Alert.alert("Ya existe un usuario con ese nombre de usuario", defaultMsg);
        } else {
          Alert.alert("Ya existe un usuario con ese correo electronico", defaultMsg);
        }
        return;
      }

      Users.push(Usuario);
      console.log(JSON.stringify(Users));
      Alert.alert("¡Cuenta creada!", "Cuenta creada exitosamente");

      navigation.goBack();

      return;
    }
    Alert.alert("Información Invalida", "Algunos campos están vacios");
  }

  return (
    <ImageBackground style={style.background} source={Background}>
      <View style={style.loginCard}>
        <Text style={style.mainTitle}>¡Crea tu Cuenta!</Text>
        <Image style={style.image} source={UserIcon} />
        <Field
          labelText="Nombre de Usuario"
          hint="Ejemplo: Angel"
          getText={getUsuario}
        />
        <Field
          labelText="Correo Electronico"
          hint="Ejemplo: ejemplo@dominio.com"
          getText={getCorreo}
        />
        <Field
          labelText="Contraseña"
          hint="Inserte la contraseña"
          getText={getPassword}
        />
        <Field 
          labelText="Confirmar Contraseña"
          hint="Vuelva a escribir la contraseña aquí"
          getText={getConfirmPass}
        />
        <CustomButton Title="Crear Cuenta" onPress={CrearCuenta} />
      </View>
    </ImageBackground>
  );
}
