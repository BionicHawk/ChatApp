import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../Theme";

// Se declaran los estilos que se usarán en este componente
const style = StyleSheet.create({
  // Este es el estilo que se aplicará al botón
  button: {
    marginTop: 8,
    backgroundColor: Theme.AccentColor,
    borderRadius: 10,
  },
  // Este es el estilo del texto del botón
  buttonTitle: {
    color: Theme.buttonForeground,
    textAlign: "center",
    fontSize: 16,
    padding: 16,
    fontWeight: "bold",
  },
});

/* Esta es la función que renderiza el botón, recibe como párametros el
   texto que se mostrará dentro del botón y la función que se ejecutará
   cuando el usuario presiona el botón */
export default function CustomButton({ Title, onPress }) {
  /* Esta función se ejecuta cuando se presiona el botón y ejecuta
     la función del párametro */
  function handleOnPress() {
    // Ejecuta la función párametro
    onPress();
  }

  return (
    <TouchableOpacity onPress={handleOnPress}>
      {/* Se declara el contenedor del texto */}
      <View style={style.button}>
        {/* Se declara el texto del botón */}
        <Text style={style.buttonTitle}>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
}
