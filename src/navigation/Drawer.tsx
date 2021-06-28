import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile/Profile";
import Like from "../screens/Like";
import ChangeLanguage from "../screens/ChangeLanguage";
import Setting from "../screens/Setting";
import Icons from "../components/Icons";
export type DrawerParamList = {
  Profile: undefined;
  LikedSong: undefined;
  Language: undefined;
  ContactUs: undefined;
  FAQs: undefined;
  Setting: undefined;
  Home: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const Drawers = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
     { <Icons name="account" />  && <Drawer.Screen name="Profile" component={Profile} />}
     { <Icons name="heart" />  && <Drawer.Screen name="LikedSong" component={Like} />}
     {  <Icons name="earth-sharp" />  &&<Drawer.Screen name="Language" component={ChangeLanguage}/>}
      { <Icons name="setting" />  &&<Drawer.Screen name="Setting" component={Setting} />}
      { <Icons name="message" />  &&<Drawer.Screen name="ContactUs" component={Home} />}
      { <Icons name="lightbulb" />  &&<Drawer.Screen name="FAQs" component={Home} />}
      { <Icons name="home" />  &&<Drawer.Screen name="Home" component={Home} />}

    </Drawer.Navigator>
  );
};

export default Drawers;

const styles = StyleSheet.create({});
