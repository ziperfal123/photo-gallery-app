import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    // justifyContent: 'center'
    alignItems: 'center'
  },
  MessageStyle: {
    fontSize: 30,
    fontWeight: '500'
  }
})
const WelcomeComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.MessageStyle}>WELCOME COMPONENT</Text>
    </View>
  )
}

export default WelcomeComp
