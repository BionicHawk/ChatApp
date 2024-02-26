import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Theme from "../Theme";

// Estos son los estilos que se utilizarán en este componente
const style = StyleSheet.create({
  // Este es el estilo que se aplicará al contendedor del campo de texto
  container: {
    margin: 12,
  },
  // Este es el estilo que se aplicará a la etiqueta del campo de texto
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
  },
  // Este es el estilo que se aplicará al campo de texto
  input: {
    padding: 12,
    fontSize: 16,
    borderColor: Theme.AccentColor,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
  },
});

/* Está es la función que renderiza el campo de texto, recibe como
   párametros el texto que mostrará la etiqueta, el texto de sombreado
   de ayuda al usuario cuando no hay texto en el campo y la función que
   obtendrá el texto del campo */
export default function Field({ labelText, hint, getText }) {
  /* Está función se encarga de obtener el texto del campo de texto usando
     la función que se le pasa a este componente */
  function handleText(text) {
    // Ejecuta la función getText del párametro
    getText(text);
  }

  return (
    <View style={style.container}>
      {/* Se renderiza la etiqueta que se mostrará antes del
          campo de texto */}
      <Text style={style.labelText}>{labelText}</Text>
      {/* Se renderiza el campo de texto y se le pasa la
          función que obtiene el texto del campo */}
      <TextInput
        style={style.input}
        cursorColor={Theme.AccentColor}
        placeholder={hint}
        onChangeText={handleText}
      />
    </View>
  );
}
