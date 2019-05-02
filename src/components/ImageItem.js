import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { displayImage } from '../actions/imagesActions'

const styles = StyleSheet.create({
  imageStyle: {
    width: 120,
    height: 130,
    margin: 1.5
  }
})

const ImageItem = props => {
  const { item } = props

  const handleImagePress = () => {
    props.displayImage(item)
  }

  return (
    <TouchableOpacity onPress={handleImagePress}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.largeImageURL
        }}
      />
    </TouchableOpacity>
  )
}

ImageItem.propTypes = {
  displayImage: PropTypes.func,
  item: PropTypes.object
}

export default connect(
  null,
  { displayImage }
)(ImageItem)
