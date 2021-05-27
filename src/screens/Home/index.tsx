import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import RawList from "./RawList";
import UserPlayList from "./UserPlayList";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title=""
        btnLeft={{ icon: "menu", onPress: () => {} }}
        btnRight={{ icon: "search", onPress: () => {} }}
      />
      <ScrollView>
        <RawList title={"Recommend For You"} />
        <UserPlayList title={"My PlayList"} />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
