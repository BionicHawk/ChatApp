import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Alert } from "react-native";
import Theme from "./Theme";
import background from "./UserCreationComponents/background.jpg";
import CustomButton from "./UserCreationComponents/CustomButton";
import Field from "./UserCreationComponents/Field";
import { Users } from "./Api/Usuarios";

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
  },
  // Este estilo se aplica a el fondo de la pantalla
  background: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
  },
});

// Está función renderiza la pantalla de Login
export default function Login() {
  // Este es el controlador del estado de Correo Electrónico
  const [email, setEmail] = useState("");
  // Este es el controlador del estado de la contraseña
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
    // Comprueba que el correo electrónico y la contraseña no esten vacíos
    if (email.length > 0 && password.length > 0) {
      // Se busca al usuario que tenga el email proporcionado
      const matchingUser = Users.find((user) => user.email === email);
      // Comprueba que matchingUser tenga un usuario
      if (matchingUser !== undefined) {
        /* Comprueba que la contraseña propocionada coincida con el del
           objeto de usuario */
        if (matchingUser.password === password) {
          /* Si es así se le lanza una alerta al usuario indicandole que 
             que todo fue bien */
          Alert.alert(
            "Credenciales Correctas",
            "Las credenciales que proporcionó son las correctas"
          );
          // Se sale de la función
          return;
        }
        /* En el caso que la contraseña no coincida se le indica al usuario 
           que alguno de los datos dados no es válido */
        Alert.alert(
          "Credenciales invalidas",
          "El correo o la contraseña son incorrectos"
        );
      }
      // Sale de la función
      return;
    }
    /* Se le manda una alerta al usuario indicandole que los campos 
       están vacíos */
    Alert.alert("Campos Vacíos", "Por favor llene todos los campos");
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      {/* Se declara el contenedor del formulario */}
      <View style={styles.loginCard}>
        {/* Se declara el titulo principal de la pantalla */}
        <Text style={styles.mainTitle}>¡Ingresa con tus credenciales!</Text>
        {/* Se renderiza el campo del correo electrónico y se le da
            acceso a la función para obtener el correo electrónico */}
        <Field
          labelText="Correo Electronico"
          hint="Ingrese su correo electronico"
          getText={getEmail}
        />
        {/* Se renderiza el campo del contraseña y se le da
            acceso a la función para obtener la contraseña */}
        <Field
          labelText="Contraseña"
          hint="Ingrese su contraseña"
          getText={getPass}
        />
        {/* Se renderiza el boton de iniciar sesión que ejecuta
            la función de autenticación */}
        <CustomButton Title="Iniciar Sesión" onPress={authenticate} />
      </View>
    </ImageBackground>
  );
}
