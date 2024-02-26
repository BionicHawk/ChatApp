import UserCreation from "./src/UserCreation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Login from "./src/Login";

// Está es la pantalla principal
export default function App() {
  // Estoy creando un objeto Stack para configurar la navegación de pantallas
  const Stack = createNativeStackNavigator();
  return (
    // Aquí se está decarando un contenedor para las pantallas
    <NavigationContainer>
    {/* Aquí se declara el navegador */}
      <Stack.Navigator>
        {/* Esta es la pantalla principal "Home" */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        {/* Esta es la pantalla para registrarse "Register" */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={UserCreation}
        />
        {/* Esta es la pantalla para autenticarse "Login" */}
        <Stack.Screen 
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
