import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'

import { pushImageToFavoritesInStore } from '../actions/imagesActions'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imageStyle: {
    width: '100%',
    height: '80%',
    marginTop: '10%'
  },

  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: 100,
    height: 40,
    backgroundColor: 'silver'
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

const FullImageDisplayScreen = props => {
  const { selecetedImageItem, selecetedImageURL, arrOfFavoriteImages } = props
  console.dir(selecetedImageItem)
  // saveImageURLToAsyncStorage(selecetedImageItem)
  // props.pushImageToFavoritesInStore(selecetedImageItem)

  handleLikeBtnPress = async () => {
    console.dir('selecetedImageItem')
    console.dir(selecetedImageItem.id)
    saveImageURLToAsyncStorage(selecetedImageItem)
    // props.pushImageToFavoritesInStore(selecetedImageItem)

    // await AsyncStorage.removeItem('listOfFavoriteImagesURL', (e, er) => {
    //   console.log('deleted!')
    // })
  }

  isDisplayedImageInFavoritesList = () => {
    console.log(arrOfFavoriteImages.length)
    for (let i = 0; i < arrOfFavoriteImages.length; i++)
      if (arrOfFavoriteImages[i].id === selecetedImageItem.id) return true
    return false
  }

  // tmpFunc = async selecetedImageObj => {
  //   const new_ImagesIDsFavoritesList = []
  //   new_ImagesIDsFavoritesList.push(selecetedImageObj)
  //   await AsyncStorage.setItem(
  //     'listOfFavoriteImagesURL',
  //     JSON.stringify(new_ImagesIDsFavoritesList)
  //   )
  //   props.pushImageToFavoritesInStore(selecetedImageObj)
  //   console.log('pushed!')
  // }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: `${selecetedImageURL}`
        }}
      />

      {arrOfFavoriteImages !== null && arrOfFavoriteImages !== '' ? (
        isDisplayedImageInFavoritesList() ? null : (
          <TouchableOpacity style={styles.btnStyle} onPress={handleLikeBtnPress}>
            <Text>LIKE!</Text>
          </TouchableOpacity>
        )
      ) : (
        console.log('empty!')
      )}
    </View>
  )
}

mapStateToProps = state => ({
  selecetedImageItem: state.imagesReducer.selecetedImageItem,
  selecetedImageURL: state.imagesReducer.selecetedImageURL,
  arrOfFavoriteImages: state.imagesReducer.arrOfFavoriteImages
})

export default connect(
  mapStateToProps,
  { pushImageToFavoritesInStore }
)(FullImageDisplayScreen)
