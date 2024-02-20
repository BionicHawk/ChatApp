import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, DrawerLayoutAndroid } from "react-native";
import MenuButton from "./MainPageComponents/MenuButton";
import Constants from "expo-constants";
import SideMenu from "./MainPageComponents/SideMenu";
import { settings } from "../Resources/Settings";

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
  const [strings, setStrings] = useState(settings.selectedLanguage.MainPageScreen);
  const { user } = route.params;
  const drawer = useRef(null);

  useEffect(() => {
    setStrings(settings.selectedLanguage.MainPageScreen);
  }, [settings.selectedLanguage]);

  function showMenu() {
    drawer.current?.openDrawer();
  }

  function exitSesion() {
    drawer.current?.closeDrawer();
    navigation.goBack();
    navigation.goBack();
  }

  function goToLanguageScreen() {
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
