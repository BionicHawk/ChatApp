import React, { useRef } from "react";
import { View, Text, StyleSheet, DrawerLayoutAndroid } from "react-native";
import MenuButton from "./MainPageComponents/MenuButton";
import Constants from "expo-constants";
import SideMenu from "./MainPageComponents/SideMenu";

// Creando los estilos de la pantalla principal
const styles = StyleSheet.create({
  /* Estilo del drawer layout, que contiene el contenido principal 
     y menu lateral */
  container: {
    flex: 1,
  },
  /* Configurando el área segura para que el contenido no 
     se sobreponga al area de notificaciones del móvil */
  safeArea: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
  },
  // Configurando los estilos de la cabecera de la pantalla
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Configurando los estilos del texto de la cabecera
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
  },
});

// Esta función renderiza la pantalla principal
export default function MainPage({ route, navigation }) {
  // Se obtiene el objeto de user del objeto route
  const { user } = route.params;
  // Se declara la referencia del menú lateral
  const drawer = useRef(null);

  // Esta función muestra el menú lateral
  function showMenu() {
    /* Si el menú al que se hace referencia existe,
       entonces se abrirá el menú lateral */
    drawer.current?.openDrawer();
  }

  // Esta función cierra la sesión actual y se va al menú principal
  function exitSesion() {
    /* Si el menú al que se hace referencia existe, entonces
       se abrirá el menú lateral */
    drawer.current?.closeDrawer();
    /* Se devolverá a la primera pantalla del Stack 
       y eliminará las consequentes */
    navigation.popToTop()
  }

  return (
    <DrawerLayoutAndroid
      style={styles.container}
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={() => (<SideMenu onExitSesion={exitSesion}/>)}
    >
      {/* Renderiza el área segura */}
      <View style={styles.safeArea}>
        {/* Renderizando la cabecera */}
        <View style={styles.header}>
          {/* Renerizando el botón para mostrar el menú lateral
              que estará dentro de la cabecera */}
          <MenuButton onPress={showMenu} />
          {/* Renderizando el texto de la cabecerá, el cual recibirá al
              usuario con su nombre */}
          <Text style={styles.headerTitle}>Hola, {user.name}</Text>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}
