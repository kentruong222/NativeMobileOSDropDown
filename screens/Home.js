import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Hello world!</Text>
      <Text style={styles.text}>Welcome to React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
  },
  textTitle: {
    color: "purple",
    fontSize: 25,
    fontWeight: "700",
  },
});
