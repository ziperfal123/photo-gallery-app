import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { HeaderBackButton } from 'react-navigation'
import PropTypes from 'prop-types'

import { pushImageToFavoritesInStore, cleanSelectedImage } from '../actions/imagesActions'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imageStyle: {
    width: '100%',
    height: 500,
    marginTop: '10%'
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: 100,
    height: 60
  },
  backBtn: {
    backgroundColor: '#f0e9e9'
  }
})

async function saveImageURLToAsyncStorage(selecetedImageObj) {
  const imagesIDsFavoritesList = await AsyncStorage.getItem('listOfFavoriteImagesURL')
  let new_ImagesIDsFavoritesList = JSON.parse(imagesIDsFavoritesList)
  if (!new_ImagesIDsFavoritesList) {
    new_ImagesIDsFavoritesList = []
  }
  new_ImagesIDsFavoritesList.push(selecetedImageObj)
  await AsyncStorage.setItem('listOfFavoriteImagesURL', JSON.stringify(new_ImagesIDsFavoritesList))
}

class FullImageDisplayScreen extends Component {
  constructor(props) {
    super(props)

    this.handleLikeBtnPress = this.handleLikeBtnPress.bind(this)
    this.isDisplayedImageInFavoritesList = this.isDisplayedImageInFavoritesList.bind(this)
    this.checkIfLikeBtnShouldRender = this.checkIfLikeBtnShouldRender.bind(this)
  }

  componentDidMount() {
    const { cleanSelectedImage } = this.props
    this.props.navigation.setParams({
      cleanSelectedImageInNav: cleanSelectedImage
    })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderBackButton
          style={styles.backBtn}
          backTitleVisible
          tintColor="#f0e9e9"
          title="Back"
          onPress={() => {
            setTimeout(() => {
              navigation.state.params.cleanSelectedImageInNav()
            }, 500)
            navigation.goBack()
          }}
        />
      )
    }
  }

  handleLikeBtnPress() {
    const { selecetedImageItem } = this.props
    saveImageURLToAsyncStorage(selecetedImageItem)
    this.props.pushImageToFavoritesInStore(selecetedImageItem)
  }

  isDisplayedImageInFavoritesList() {
    const { selecetedImageItem, arrOfFavoriteImages } = this.props
    if (arrOfFavoriteImages.length === 0) return false
    for (let i = 0; i < arrOfFavoriteImages.length; i++) {
      if (arrOfFavoriteImages[i].id === selecetedImageItem.id) return true
    }
    return false
  }

  checkIfLikeBtnShouldRender() {
    const { arrOfFavoriteImages } = this.props
    if (
      arrOfFavoriteImages !== null &&
      arrOfFavoriteImages !== '' &&
      arrOfFavoriteImages !== undefined
    ) {
      if (this.isDisplayedImageInFavoritesList() === false) {
        return (
          <TouchableHighlight style={styles.btnStyle} onPress={this.handleLikeBtnPress}>
            <Image source={require('./heart.png')} />
          </TouchableHighlight>
        )
      }
    } else
      return (
        <TouchableHighlight style={styles.btnStyle} onPress={this.handleLikeBtnPress}>
          <Image source={require('./heart.png')} />
        </TouchableHighlight>
      )
  }

  render() {
    const { selecetedImageItem } = this.props
    const shoulRenderLikeBtn = this.checkIfLikeBtnShouldRender()

    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `${selecetedImageItem.largeImageURL}`
          }}
        />
        <View>{shoulRenderLikeBtn}</View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selecetedImageItem: state.imagesReducer.selecetedImageItem,
  arrOfFavoriteImages: state.imagesReducer.arrOfFavoriteImages
})

FullImageDisplayScreen.propTypes = {
  selecetedImageItem: PropTypes.string,
  arrOfFavoriteImages: PropTypes.array,
  pushImageToFavoritesInStore: PropTypes.func,
  cleanSelectedImage: PropTypes.func,
  navigation: PropTypes.object
}

export default connect(
  mapStateToProps,
  { pushImageToFavoritesInStore, cleanSelectedImage }
)(FullImageDisplayScreen)
