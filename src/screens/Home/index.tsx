import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../../components/Layout'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../../components/Header';
import RawList from './RawList';
import UserPlayList from './UserPlayList'
import { ScrollView } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
const Home = () => {
    return (
     <Layout style={{flex:1}}>
       <Header title=''/>
       <ScrollView>
       <RawList title={"Recommend For You"}/>
       <UserPlayList title={"My PlayList"}/>
       </ScrollView>
       </Layout>
    )
}

export default Home

const styles = StyleSheet.create({})
