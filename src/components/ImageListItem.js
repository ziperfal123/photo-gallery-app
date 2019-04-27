import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { displayImage } from '../actions/imagesActions'

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'green',
    marginTop: 8
  },

  imageStyle: {
    width: 100,
    height: 110
    // borderRadius: 50
  },
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'grey'
  },
  likesAndViewsContainerStyle: {
    backgroundColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  imgTitleStyle: {
    width: '65%',
    fontSize: 26,
    marginTop: 3,
    marginLeft: 20
  }
})

const ImageListItem = props => {
  const { item, title, views, likes, imgSource } = props

  optimizeTitleForDisplaying = () => {
    let optimizedTitle = title.split(',')
    let titleToDisplay = ''
    if (optimizedTitle.length > 3) optimizedTitle = optimizedTitle.splice(0, 3)
    for (let i = 0; i < optimizedTitle.length; i++) {
      titleToDisplay += optimizedTitle[i]
      if (i < 2) titleToDisplay += ', '
    }
    return titleToDisplay
  }

  handleImagePress = () => {
    props.displayImage(item)
  }
  const titleToDisplay = optimizeTitleForDisplaying()

  return (
    <TouchableOpacity onPress={this.handleImagePress}>
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
            <Text style={{ marginLeft: 20, fontSize: 14 }}>Views: {views}</Text>
            <Text style={{ marginLeft: 35, fontSize: 14 }}>Likes: {likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default connect(
  null,
  { displayImage }
)(ImageListItem)
