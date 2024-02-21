import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, DrawerLayoutAndroid } from "react-native";
import MenuButton from "./MainPageComponents/MenuButton";
import Constants from "expo-constants";
import SideMenu from "./MainPageComponents/SideMenu";
import { settingsContext } from "../../App";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
  },
});

export default function MainPage({ route, navigation }) {
  const {language, setLanguage} = useContext(settingsContext);
  const [strings, setStrings] = useState(language.MainPageScreen);

  useEffect(() => {
    setLanguage(language);
    setStrings(language.MainPageScreen);
  }, [language])

  const { user } = route.params;
  const drawer = useRef(null);

  function showMenu() {
    drawer.current?.openDrawer();
    console.log("Tratando de abir el menu lateral...");
    console.log(`Referencia al menu lateral: ${(drawer.current === null || drawer.current === undefined)}`)
  }

  function exitSesion() {
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
      <View style={styles.safeArea}>
        <View style={styles.header}>
          <MenuButton onPress={showMenu} />
          <Text style={styles.headerTitle}>
            {strings.WelcomeHeaderLabel.replace("%s", user.name)}
          </Text>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}
