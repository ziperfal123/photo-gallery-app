import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'

import { displayImage } from '../actions/imagesActions'

const styles = StyleSheet.create({
  imageStyle: {
    width: 120,
    height: 130,
    margin: 1.5
    // flex: 1
    // width: "32%",
    // height: "34%"
  }
})

const ImageItem = props => {
  const { item } = props

  handleImagePress = () => {
    props.displayImage(item)
  }

  return (
    <TouchableOpacity onPress={this.handleImagePress}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.largeImageURL
        }}
      />
    </TouchableOpacity>
  )
}

export default connect(
  null,
  { displayImage }
)(ImageItem)
