import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import RawList from "./RawList";
import UserPlayList from "./UserPlayList";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../navigation/RootStack";
import { useLocale } from "../../config/Locallize";

const Home = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const {t} = useLocale();

  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title=""
        btnLeft={{ icon: "menu", onPress: () => {} }}
        btnRight={{ icon: "search", onPress: () => {
          navigate("Search")
        } }}
      />
      <ScrollView>
        <RawList title={t('recommendForYou')} />
        <UserPlayList title={"My PlayList"} />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
