import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Alert } from "react-native";
import Theme from "./Theme";
import background from "./UserCreationComponents/background.jpg";
import CustomButton from "./UserCreationComponents/CustomButton";
import Field from "./UserCreationComponents/Field";
import { Users } from "./Api/Usuarios";

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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function getEmail(value) {
    setEmail(value);
  }

  function getPass(value) {
    setPassword(value);
  }

  function authenticate() {
    if (email.length > 0 && password.length > 0) {
        const matchingUser = Users.find(user => user.email === email);
        if (matchingUser !== undefined) {
            if (matchingUser.password === password) {
                navigation.navigate('MainPage', {user: matchingUser})
                return;
            } 
            Alert.alert("Credenciales invalidas", "El correo o la contraseña son incorrectos")
        }
        return;
    }
    Alert.alert("Campos Vacíos", "Por favor llene todos los campos");
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.loginCard}>
        <Text style={styles.mainTitle}>¡Ingresa con tus credenciales!</Text>
        <Field
          labelText="Correo Electronico"
          hint="Ingrese su correo electronico"
          getText={getEmail}
        />
        <Field
          labelText="Contraseña"
          hint="Ingrese su contraseña"
          getText={getPass}
        />
        <CustomButton Title="Iniciar Sesión" onPress={authenticate} />
      </View>
    </ImageBackground>
  );
}
