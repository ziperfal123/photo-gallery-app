import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { displayImage } from '../actions/imagesActions'

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#f0e9e9',
    marginTop: 8
  },

  imageStyle: {
    width: 100,
    height: 110
  },
  textContainerStyle: {
    color: '#f0e9e9',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#f0e9e9'
  },
  likesAndViewsContainerStyle: {
    backgroundColor: '#aa7070',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  imgTitleStyle: {
    width: '65%',
    fontSize: 26,
    marginTop: 3,
    marginLeft: 20
  },
  viewsTextStyle: {
    marginLeft: 20,
    fontSize: 14
  },
  likesTextStyle: {
    marginLeft: 35,
    fontSize: 14
  }
})

const ImageListItem = props => {
  const { item, title, views, likes, imgSource } = props

  const optimizeTitleForDisplaying = () => {
    let optimizedTitle = title.split(',')
    let titleToDisplay = ''
    if (optimizedTitle.length > 3) optimizedTitle = optimizedTitle.splice(0, 3)
    for (let i = 0; i < optimizedTitle.length; i++) {
      titleToDisplay += optimizedTitle[i]
      if (i < 2) titleToDisplay += ', '
    }
    return titleToDisplay
  }

  const handleImagePress = () => {
    props.displayImage(item)
  }
  const titleToDisplay = optimizeTitleForDisplaying()

  return (
    <TouchableOpacity onPress={handleImagePress}>
      <View style={styles.containerStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `${imgSource}`
          }}
        />
        <View style={styles.textContainerStyle}>
          <Text style={styles.imgTitleStyle}>{titleToDisplay}</Text>
          <View style={styles.likesAndViewsContainerStyle}>
            <Text style={styles.viewsTextStyle}>Views: {views}</Text>
            <Text style={styles.likesTextStyle}>Likes: {likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

ImageListItem.propTypes = {
  displayImage: PropTypes.func,
  item: PropTypes.object,
  title: PropTypes.string,
  views: PropTypes.string,
  likes: PropTypes.string,
  imgSource: PropTypes.string
}

export default connect(
  null,
  { displayImage }
)(ImageListItem)
