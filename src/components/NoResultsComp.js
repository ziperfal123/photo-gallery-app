import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gifStyle: {
    marginTop: 30,
    width: 300,
    height: 300
  },
  NoFoundMsgStyle: {
    marginTop: 45,
    fontSize: 28,
    fontWeight: 'bold'
  },
  tryAgainMsgStyle: {
    marginTop: 25,
    fontSize: 24,
    textAlign: 'center',
    width: '95%'
  }
})
const NoResultComp = ({ messageToDisplay }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.gifStyle} source={require('../../assets/notFoundGif.gif')} />
      <Text style={styles.NoFoundMsgStyle}>Sorry, No Result Found!</Text>
      <Text style={styles.tryAgainMsgStyle}>{messageToDisplay}</Text>
    </View>
  )
}

NoResultComp.propTypes = {
  messageToDisplay: PropTypes.string
}

export default NoResultComp
