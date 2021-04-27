import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Like from "../screens/Like";
import Setting from "../screens/Setting";
import { useTheme } from "../config/Themed";
import { color } from "react-native-reanimated";
import { Button } from "react-native";
export type MainTabParamList = {
  Home: undefined;
  Setting: undefined;
  Like: undefined;
};

const Tab = createMaterialTopTabNavigator<MainTabParamList>();
const MainTab = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        inactiveTintColor: "rgba(255,255,255,.3)",
        activeTintColor: "#fff",
        tabStyle: {
          backgroundColor: theme.tab_background,
        },
        pressColor: "transparent",
        pressOpacity: 1,
        indicatorStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Ionicons name="home-outline" size={24} color={color}/>,
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          tabBarIcon: ({color}) => <Ionicons name="heart-circle-outline" size={24} color={color}/>,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => <Ionicons name="settings-outline" size={24} color={color}/>,
        }}
      />
    </Tab.Navigator>
   
  );
};

export default MainTab;
