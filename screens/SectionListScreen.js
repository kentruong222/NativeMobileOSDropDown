import React from "react";
import { View, SectionList, StyleSheet, Text } from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Item = ({ title }) => {
  return (
    <View style={{ marginVertical: 20, marginHorizontal: 10, fontSize: 18 }}>
      <Text>{title}</Text>
    </View>
  );
};

const SectionListScreen = () => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "purple",
    marginTop: 20,
    fontSize: 35,
    color: "white",
    padding: 20,
  },
});
