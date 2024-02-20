import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { languages, settings } from "../Resources/Settings";
import Theme from "../Theme";
import Home from "../Home";

export default function LanguageScreen({ navigation }) {
  const allowedLangs = [languages.en_us, languages.es_mx];

  const styles = StyleSheet.create({
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
          settings.selectedLanguage = { ...language };
          navigation.popToTop();
        }}
      >
        <Text style={applyingText}>{language.LanguageName}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      {allowedLangs.map((lang) => (
        <Language
          language={lang}
          key={lang.LanguageName}
          selected={
            lang.LanguageName === settings.selectedLanguage.LanguageName
          }
        />
      ))}
    </View>
  );
}
