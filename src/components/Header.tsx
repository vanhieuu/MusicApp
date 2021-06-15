import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Layout from "./Layout";
import Text from "./Text";
import Constants from "expo-constants";
import Icons from "./Icons";
interface Props {
  title: string;
  btnLeft?: {
    icon: string;
    onPress: () => void;
  };
  btnRight?: {
    icon: string;
    onPress: () => void;
  };
}

const Header = ({ title, btnLeft, btnRight }: Props) => {
  return (
    <Layout style={styles.container}>
      {!!btnLeft ? (
        <TouchableOpacity style={styles.btn} onPress={btnLeft.onPress}>
          <Icons name={btnLeft.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.btn} />
      )}
      <View style={styles.body}>
        <Text size={"h2"} font="Medium">
          {title}
        </Text>
      </View>
      {!!btnRight ? (
        <TouchableOpacity style={styles.btn} onPress={btnRight.onPress}>
          <Icons name={btnRight.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.btn} />
      )}
    </Layout>
  );
};

export default Header;

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btn1: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    height: 40,
    marginTop: Constants.statusBarHeight,
  },
  container1: {
    alignContent: "space-around",
    height: 40,
  },
});
