import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../../components/Layout'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Home = () => {
    return (
     <Layout style={{flex:1}}>
       <Text></Text>
       </Layout>
    )
}

export default Home

const styles = StyleSheet.create({})
