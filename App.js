import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserCreation from "./src/UserCreation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Login from "./src/Login";
import MainPage from "./src/Pages/MainPage";
import LanguageScreen from "./src/Pages/LanguageScreen";
import { createContext, useState } from "react";
import { languages } from "./src/Resources/Settings";

export const settingsContext = createContext();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [language, setLanguage] = useState(languages.es_mx);

  return (
    <settingsContext.Provider value={{ language, setLanguage }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={UserCreation}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MainPage"
            component={MainPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LanguageSwitching"
            component={LanguageScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </settingsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
