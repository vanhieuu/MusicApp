import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import Layout from '../../components/Layout'
import { RootStackParamList } from '../../navigation/RootStack'

const Setting = () => {
    const {goBack} = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, "Playing">>();
    return (
        <Layout style={{flex:1}}>
            <View style={{
                flex:1, 
                paddingHorizontal:16,
                flexDirection: "row",
                paddingTop:StatusBar.currentHeight,
            }}>
                <Pressable style={{height:100,justifyContent: "center",marginVertical:16}}>
                            
                </Pressable>

            </View>
        </Layout>
    )
}

export default Setting

const styles = StyleSheet.create({})
