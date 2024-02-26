import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import background from "./UserCreationComponents/background.jpg";
import chatIcon from "./HomeComponents/ChatIcon.png";
import Theme from "./Theme";
import CustomButton from "./UserCreationComponents/CustomButton";

// Se declaran los estilos de esta pantalla
const styles = StyleSheet.create({
  // Este estilo es para el fondo
  background: {
    flex: 1,
    justifyContent: "center",
  },
  // Este estilo es para el titulo de la pantalla
  title: {
    color: Theme.titleForeground,
    fontSize: 42,
    textAlign: "center",
  },
  // Este estilo es para la imagen de presentación
  image: {
    backgroundColor: "#ffffff",
    height: 200,
    width: 200,
    alignSelf: "center",
    borderRadius: 100,
    margin: 30,
    borderWidth: 4,
    borderColor: Theme.SecondaryColor,
  },
  // Este estilo es para los botones de navegación
  buttons: {
    marginHorizontal: 30,
  },
});

export default function Home({ navigation }) {
    // Está función navega hacia la página de registro
  function navigateToRegisterPage() {
    /* Se le indica al objeto de navegación que queremos
       ir a la página de registro */
    navigation.navigate("Register");
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      {/* Se declara el titulo principal de la pantalla */}
      <Text style={styles.title}>Bienvenido a ChatApp</Text>
      {/* Se declara la imagen de presentación */}
      <Image source={chatIcon} style={styles.image} />
      {/* Se declara el contenedor de los botones */}
      <View style={styles.buttons}>
        {/* Este botón al ser presionado lleva a la pantalla
            de registro de usuario */}
        <CustomButton Title="Registrarse" onPress={navigateToRegisterPage} />
      </View>
    </ImageBackground>
  );
}
