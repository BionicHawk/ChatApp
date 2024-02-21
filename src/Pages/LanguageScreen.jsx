import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { languages } from "../Resources/Settings";
import Theme from "../Theme";
import { settingsContext } from "../../App";
import Constants from "expo-constants";

export default function LanguageScreen({ navigation }) {
  const allowedLangs = [languages.en_us, languages.es_mx];
  const { language, setLanguage } = useContext(settingsContext);
  const [ strings, setStrings ] = useState(language.LanguageSwitchingPage);

  useEffect(() => {
    setLanguage(language);
    setStrings(language.LanguageSwitchingPage);
  }, [language])

  const styles = StyleSheet.create({
    mainContent: {
      marginTop: Constants.statusBarHeight,
    },
    title: {
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      marginHorizontal: 40,
      marginVertical: 64
    },
    languageOptionsContainer: {
      marginVertical: 16,
    },
    containerItem: {
      backgroundColor: "#C0C0C0",
      padding: 20,
      borderRadius: 16,
      marginVertical: 3,
      marginHorizontal: 16,
    },
    selected: {
      backgroundColor: Theme.AccentColor,
    },
    selectedText: {
      color: "#ffffff",
    },
    languageName: {
      fontSize: 16,
      textAlign: 'center'
    },
  });

  function Language({ language, selected }) {
    let applyingStyle = { ...styles.containerItem };
    let applyingText = { ...styles.languageName };
    if (selected) {
      applyingStyle = { ...applyingStyle, ...styles.selected };
      applyingText = { ...applyingText, ...styles.selectedText };
    }
    return (
      <TouchableOpacity
        style={applyingStyle}
        onPress={() => {
          setLanguage(language);
          navigation.goBack();
        }}
      >
        <Text style={applyingText}>{language.LanguageName}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.mainContent}>
      <Text style={styles.title}>{strings.title}</Text>
      <View style={styles.languageOptionsContainer}>
        {allowedLangs.map((lang) => (
          <Language
            language={lang}
            key={lang.LanguageName}
            selected={lang.LanguageName === language.LanguageName}
          />
        ))}
      </View>
    </View>
  );
}
