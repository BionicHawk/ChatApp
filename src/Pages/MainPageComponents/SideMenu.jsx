import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../UserCreationComponents/CustomButton";
import Constants from "expo-constants";

// Creando los estilos del menú lateral
const styles = StyleSheet.create({
  // Estilos del contenedor
  container: {
    padding: 20,
  },
  // Estilos del contenido del menú lateral
  contentView: {
    marginVertical: Constants.statusBarHeight,
  },
});

/* Está función renderiza el menú lateral, se le pasa 
   como argumento una función que se ejecutará cuando se
   pretende cerrar sesión */
export default function SideMenu({ onExitSesion }) {
  /* Función que controla la ejecución de código cuando 
     el botón de cerrar sesión se presiona */
  function handleOnPress() {
    // Se ejecuta la función correspondiente a cerrar sesión
    onExitSesion();
  }

  return (
    <View style={styles.container}>
      {/* Renderizando el contenedor los componentes que
          se mostrarán en el menú lateral */}
      <View style={styles.contentView}>
        {/* Renderizando el botón de Salir de la sesión y obtendrá la función
            handleOnPress */}
        <CustomButton Title="Salir de la sesión" onPress={handleOnPress} />
      </View>
    </View>
  );
}
