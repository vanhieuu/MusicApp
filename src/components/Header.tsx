import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Layout from './Layout'
import Text from './Text'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useTheme } from '../config/Themed'
interface Props{
    title: string
}

const Header = ({title}:Props) => {
    const {theme} = useTheme()
    return (
        <Layout style={styles.container}>
           <TouchableOpacity style={styles.btn}>
               <Ionicons name="menu" />
           </TouchableOpacity>
           <View style={styles.body}>
            <Text>{title}</Text>
           </View>
           <TouchableOpacity style={styles.btn}>
               <Ionicons name="search" />
           </TouchableOpacity>
        </Layout>
    )
}

export default Header

const styles = StyleSheet.create({
    btn:{
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        flex:1
    },
    container:{
        flexDirection:'row', 
        height:40,
        // marginTop: Constants.statusBarHeight

    }
})
