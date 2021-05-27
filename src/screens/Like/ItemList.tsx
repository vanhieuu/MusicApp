import React from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/Text";
interface Props {
  title: string;
  source: ImageSourcePropType;
  name: string;
}
const ItemList = ({ title, source, name }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={source} />
        <Text size="h3" style={styles.txtTitle}>
          {title}
        </Text>
        <Text size="h5" status="singer">
          {name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 4,
  },
  txtTitle: {
    marginTop: 16,
    marginBottom: 6,
  },
});
