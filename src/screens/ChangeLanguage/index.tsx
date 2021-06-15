import React from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";
import Icons from "../../components/Icons";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import { TLocale, useLocale } from "../../config/Locallize";
import { useTheme } from "../../config/Theme";
interface IListLang {
  title: string;
  value: TLocale;
}
const ChangeLanguage = () => {
  const { t, locale, setLocale } = useLocale();
  const listLang: IListLang[] = React.useMemo(() => {
    return [
      {
        title: t("vi"),
        value: "vi",
      },
      {
        title: t("en"),
        value: "en",
      },
    ];
  }, [locale]);
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ marginLeft: 16, marginBottom: 24 }}>{t("lang")}</Text>
        {listLang.map((item: IListLang, index: number) => {
          return (
            <TouchableOpacity
              style={{
                height: 40,
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 16,
                justifyContent: "space-between",
              }}
              key={index}
              onPress={() => {
                setLocale(item.value);
              }}
            >
              <View>
                <Text size={"h2"}>{item.title}</Text>
              </View>
              {item.value === locale && <Icons name="checkMark" />}
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </Layout>
  );
};

export default ChangeLanguage;
