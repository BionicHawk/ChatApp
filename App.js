import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserCreation from './src/UserCreation';

export default function App() {
  return (
    <View style={styles.container}>
      <UserCreation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
