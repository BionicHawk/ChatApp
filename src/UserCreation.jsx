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
import { NavigationProp } from "@react-navigation/native";

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

  function getUsuario(value) {
    setNombreUsuario(value);
  }

  function getCorreo(value) {
    setCorreo(value);
  }

  function getPassword(value) {
    setPassword(value);
  }

  function CrearCuenta() {
    if (nombreUsuario.length > 0 && correo.length > 0 && password.length > 0) {
      const Usuario = {
        name: nombreUsuario,
        email: correo,
        password: password,
      };
      console.log(JSON.stringify(Usuario));
      Alert.alert("¡Cuenta creada!", "Cuenta creada exitosamente");
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
        <CustomButton Title="Crear Cuenta" onPress={CrearCuenta} />
      </View>
    </ImageBackground>
  );
}
