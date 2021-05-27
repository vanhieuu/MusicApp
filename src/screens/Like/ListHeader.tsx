import React from 'react'
import { StyleSheet,  } from 'react-native'
import Text from "../../components/Text"
const ListHeader = () => {
    return (
      <Text
        font="Bold"
        size={"h1"}
        style={{ marginLeft: 16, marginBottom: 16 }}
      >Liked Songs</Text>
    );
  
}

export default ListHeader

const styles = StyleSheet.create({})
