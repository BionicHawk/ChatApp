import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../UserCreationComponents/CustomButton";
import Constants from "expo-constants";
import { settings } from "../../Resources/Settings";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  contentView: {
    marginVertical: Constants.statusBarHeight,
  },
  centeredModal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: "#a0a0a0",
    height: 200,
    width: 200
  }
});

export default function SideMenu({ onExitSesion, onLanguageSwitching }) {
  const [strings, setStrings] = useState(settings.selectedLanguage.MainPageScreen);

  useEffect(() => {
    setStrings(settings.selectedLanguage.MainPageScreen);
  }, [settings.selectedLanguage]);

  function handleOnPress() {
    onExitSesion();
  }

  function handleOnLanguageSwitching() {
    onLanguageSwitching();
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <CustomButton Title={strings.SwitchLanguage} onPress={handleOnLanguageSwitching}/>
        <CustomButton Title={strings.ExitSesion} onPress={handleOnPress} />
      </View>
    </View>
  );
}
