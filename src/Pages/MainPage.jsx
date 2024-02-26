import React, { useRef } from "react";
import { View, Text, StyleSheet, DrawerLayoutAndroid } from "react-native";
import MenuButton from "./MainPageComponents/MenuButton";
import Constants from "expo-constants";
import SideMenu from "./MainPageComponents/SideMenu";

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
  const { user } = route.params;
  const drawer = useRef(null);

  function showMenu() {
    drawer.current?.openDrawer();
  }

  function exitSesion() {
    drawer.current?.closeDrawer();
    navigation.goBack();
    navigation.goBack();
  }

  return (
    <DrawerLayoutAndroid
      style={styles.container}
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={() => (<SideMenu onExitSesion={exitSesion}/>)}
    >
      <View style={styles.safeArea}>
        <View style={styles.header}>
          <MenuButton onPress={showMenu} />
          <Text style={styles.headerTitle}>Hola, {user.name}</Text>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}
