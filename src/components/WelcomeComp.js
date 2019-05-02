import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#f0e9e9'
  },
  bigMessageStyle: {
    marginTop: 15,
    fontSize: 40,
    fontWeight: '500'
  },
  smallMessageStyle: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: '500'
  }
})
const WelcomeComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigMessageStyle}>Photo Gallery App</Text>
      <Text style={styles.smallMessageStyle}>Search it, Find it, Like it.</Text>
    </View>
  )
}

export default WelcomeComp
