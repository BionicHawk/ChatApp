import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, DrawerLayoutAndroid } from "react-native";
import MenuButton from "./MainPageComponents/MenuButton";
import Constants from "expo-constants";
import SideMenu from "./MainPageComponents/SideMenu";
import { settingsContext } from "../../App";

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
  const {language, setLanguage} = useContext(settingsContext);
  const [strings, setStrings] = useState(language.MainPageScreen);

  useEffect(() => {
    setLanguage(language);
    setStrings(language.MainPageScreen);
  }, [language])

  // Se obtiene el objeto de user del objeto route
  const { user } = route.params;
  // Se declara la referencia del menú lateral
  const drawer = useRef(null);

  // Esta función muestra el menú lateral
  function showMenu() {
    /* Si el menú al que se hace referencia existe,
       entonces se abrirá el menú lateral */
    drawer.current?.openDrawer();
    console.log("Tratando de abir el menu lateral...");
    console.log(`Referencia al menu lateral: ${(drawer.current === null || drawer.current === undefined)}`)
  }

  // Esta función cierra la sesión actual y se va al menú principal
  function exitSesion() {
    /* Si el menú al que se hace referencia existe, entonces
       se abrirá el menú lateral */
    drawer.current?.closeDrawer();
    navigation.popToTop();
  }
  
  function goToLanguageScreen() {
    drawer.current?.closeDrawer();
    navigation.navigate("LanguageSwitching");
  }

  return (
    <DrawerLayoutAndroid
      style={styles.container}
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={() => <SideMenu onExitSesion={exitSesion} onLanguageSwitching={goToLanguageScreen}/>}
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
          <Text style={styles.headerTitle}>
            {strings.WelcomeHeaderLabel.replace("%s", user.name)}
          </Text>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}
