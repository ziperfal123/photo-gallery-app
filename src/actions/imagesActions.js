import {
  FETCH_IMAGES,
  DISPLAY_IMAGE,
  CLEAN_SELECTED_IMAGE,
  FETCH_FAVORITES_IMAGES_FROM_ASYNC_STORAGE,
  PUSH_IMAGE_TO_FAVORITES
} from './actionTypes'
import AsyncStorage from '@react-native-community/async-storage'

function optimizeQueryFunc(searchQueryInput) {
  const optimizedSearchQueryInput = searchQueryInput.replace(/ /g, '+')
  return optimizedSearchQueryInput
}

export const fetchImages = searchQueryInput => dispatch => {
  let searchQueryAfterOptimization
  if (searchQueryInput === undefined || searchQueryInput === null || searchQueryInput === '')
    searchQueryAfterOptimization = 'big+dog'
  // will be the defualt.. Change?
  else {
    searchQueryAfterOptimization = optimizeQueryFunc(searchQueryInput)
  }
  fetch(
    `https://pixabay.com/api/?key=12214960-5b65c50dcdfde67eecdaa9198&q=${searchQueryAfterOptimization}&image_type=photo&pretty=true`
  )
    .then(res => res.json())
    .then(data => {
      console.log('dispatch!')
      dispatch({
        type: FETCH_IMAGES,
        payload: data.hits
      })
    })
}

export const displayImage = imageItemToDisplay => dispatch => {
  dispatch({
    type: DISPLAY_IMAGE,
    payload: imageItemToDisplay
  })
}

export const cleanSelectedImage = () => dispatch => {
  dispatch({
    type: CLEAN_SELECTED_IMAGE,
    payload: null
  })
}

export const pushImageToFavoritesInStore = imageObjToPush => dispatch => {
  dispatch({
    type: PUSH_IMAGE_TO_FAVORITES,
    payload: imageObjToPush
  })
}

export const fetchFavoritesImagesFromAsyncStorage = () => async dispatch => {
  console.log('in ACTIONS')
  let favoriteImagesFromAsyncStorage = await AsyncStorage.getItem('listOfFavoriteImagesURL')
  // console.log(favoriteImagesFromAsyncStorage)
  favoriteImagesFromAsyncStorage = JSON.parse(favoriteImagesFromAsyncStorage)
  console.log(favoriteImagesFromAsyncStorage)

  dispatch({
    type: FETCH_FAVORITES_IMAGES_FROM_ASYNC_STORAGE,
    payload: favoriteImagesFromAsyncStorage
  })
}
