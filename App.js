import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens/home/home.screen";
import { RegisterScreen } from "./src/screens/register/register.screen";

export default function App() {
  return (
    <>
      <RegisterScreen />
      <StatusBar style="auto" />
    </>
  );
}
