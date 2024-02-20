import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Settings } from "react-native";
import { languages, settings } from "../Resources/Settings";
import Theme from "../Theme";
import Home from "../Home";
import { settingsContext } from "../../App";

export default function LanguageScreen({ navigation }) {
  const allowedLangs = [languages.en_us, languages.es_mx];
  const {language, setLanguage} = useContext(settingsContext)

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
          setLanguage(language)
          navigation.goBack();
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
            lang.LanguageName === language.LanguageName
          }
        />
      ))}
    </View>
  );
}
