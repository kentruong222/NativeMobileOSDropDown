import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Home from "./screens/Home";
import FadeIn from "./screens/FadeIn";
import Rotate from "./screens/Rotate";
import DragGesture from "./screens/DragGesture";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import FlatListScreen from "./screens/FlatListScreen";
import SectionListScreen from "./screens/SectionListScreen";
import DropDown from "./screens/DropDown";

const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "purple",
        inactiveTintColor: "gray",
      }}
    >
      <RootTab.Screen
        name="FadeIn"
        component={FadeIn}
        options={{
          title: "Fade In",
          tabBarIcon: ({ focused }) => (
            <Entypo name="air" size={24} color={focused ? "purple" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Rotate"
        component={Rotate}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="retweet"
              size={24}
              color={focused ? "purple" : "gray"}
            />
          ),
        }}
      />
      <RootTab.Screen
        name="DragGesture"
        component={DragGesture}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="copy" size={24} color={focused ? "purple" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="DropDown"
        component={DropDown}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="arrowdown"
              size={24}
              color={focused ? "purple" : "gray"}
            />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
      <Drawer.Screen name="FlatListScreen" component={FlatListScreen} />
      <Drawer.Screen name="SectionListScreen" component={SectionListScreen} />
      <Drawer.Screen name="Animations" component={RootTabNavigator} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
