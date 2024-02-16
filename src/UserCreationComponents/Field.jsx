import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Theme from "../Theme";

const style = StyleSheet.create({
  container: {
    margin: 12,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
  },
  input: {
    padding: 12,
    fontSize: 16,
    borderColor: Theme.AccentColor,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default function Field({ labelText, hint, getText }) {
  function handleText(text) {
    getText(text);
  }

  return (
    <View style={style.container}>
      <Text style={style.labelText}>{labelText}</Text>
      <TextInput
        style={style.input}
        cursorColor={Theme.AccentColor}
        placeholder={hint}
        onChangeText={handleText}
      />
    </View>
  );
}
