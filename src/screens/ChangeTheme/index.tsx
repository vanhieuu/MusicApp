import React, { useMemo, useState } from 'react'
import { StyleSheet, View,TouchableOpacity} from 'react-native'
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import { useLocale } from '../../config/Locallize'
import { ITheme, themes, TMode, useTheme } from '../../config/Theme'

interface IListTheme{
    title: string,
    mode:TMode
}
const ChangeTheme = () => {
    const {toogleTheme, theme,mode } = useTheme(),
    const { t } = useLocale();
  const listTheme:IListTheme[] = React.useMemo(() => {
      return [
          {
              title:t('dark'),
              mode:'dark',
          },
          {
            title:t('light'),
            mode:'light',
        },
      ]
  },[mode])
  return (
    <Layout style={{ flex: 1 }}>
        <Header title="" btnLeft={{ icon: "menu", onPress: () => {} }} />
        <Text style={{ marginLeft: 16, marginBottom: 24 }} size={"h2"}>{t("")}</Text>
        {listTheme.map((item: IListTheme, index: number) => {
          return (
            <TouchableOpacity
              style={{
                height: 40,
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 16,
                justifyContent: "space-between",
                marginBottom: 12,
              }}
              key={index}
              onPress={() => {
                setMode(item.mode);
              }}
            >
              <View>
                <Text size={"h2"}>{item.title}</Text>
              </View>
              {item.value === locale && <Icons name="checkmark" />}
            </TouchableOpacity>
          );
        })}
    </Layout>
  );
};

export default ChangeTheme

const styles = StyleSheet.create({})
