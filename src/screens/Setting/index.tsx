import { NavigationProp, useNavigation, } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "../../components/Icons";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import { useLocale } from "../../config/Locallize";
import { useTheme } from "../../config/Theme";
import { RootStackParamList } from "../../navigation/RootStack";

const Setting = () => {
  const { t } = useLocale();
  const { mode } = useTheme();
  
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
 
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ marginLeft: 16, marginBottom: 24 }}>{t("setting")}</Text>
        <TouchableOpacity
          style={{
            height: 40,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 16,
            justifyContent: "space-between",
            marginBottom:12
          }}
          onPress={() =>{
            navigate("ChangeLanguage")
          }}
        >
          <View style={{flex:1}}>
            <Text size={"h2"}>{t("lang")}</Text>
            <Text size={"h4"}>{t("value")}</Text>
          </View>
            <Icons name="chevron-forward-outline"/>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 40,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 16,
            justifyContent: "space-between",
            marginBottom:12
          }}
        >
          <View>
            <Text size="h2">{t("theme")}</Text>
            <Text size="h4">{t(mode)}</Text>
          </View>
            <Icons name="chevron-forward-outline" />
        </TouchableOpacity>
      </SafeAreaView>
    </Layout>
  );
};

export default Setting;


