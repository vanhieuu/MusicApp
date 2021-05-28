import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icons from '../../components/Icons'

const ControlShuffle = () => {
    return (
        <View
        style={styles.container}
      >
        <TouchableOpacity>
          <Icons name="volume-high-outline" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Icons name="repeat" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons name="shuffle" />
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default ControlShuffle

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 20,
      }
})
