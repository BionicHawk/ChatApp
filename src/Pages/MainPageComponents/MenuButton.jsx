import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import MenuIcon from "./MenuIcon.png";

// Creando los estilos del componente del botón de opciones
const style = StyleSheet.create({
  // Estilo de la imagen dentro del botón de opciones
  image: {
    height: 40,
    width: 40,
    margin: 10,
  },
  // Estilo del contenedor del botón
  container: {
    padding: 10,
  },
});

/* Función que renderiza el botón de opciones  que recibe como
   párametro una función que se ejecutará al presionar el botón */
export default function MenuButton({ onPress }) {
  /* Está función controla la ejecución de cuando el botón 
     es presionado */
  function handleOnPress() {
    // Ejecutando la función que se le ha pasado al componente
    onPress();
  }

  return (
    <TouchableOpacity onPress={handleOnPress} style={style.container}>
      {/* Renderizando la imagen del botón */}
      <Image source={MenuIcon} style={style.image} />
    </TouchableOpacity>
  );
}
