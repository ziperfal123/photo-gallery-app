import {
  FETCH_IMAGES,
  DISPLAY_IMAGE,
  CLEAN_SELECTED_IMAGE,
  FETCH_FAVORITES_IMAGES_FROM_ASYNC_STORAGE,
  PUSH_IMAGE_TO_FAVORITES,
  CHANGE_FIRST_SEARCH_FLAG,
  FIRE_LOADING_ANIMATION,
  STOP_LOADING_ANIMATION
} from "./actionTypes";
import AsyncStorage from "@react-native-community/async-storage";
//
import fetch from "isomorphic-fetch";
//
import store from "../store";

function optimizeQueryFunc(searchQueryInput) {
  const optimizedSearchQueryInput = searchQueryInput.replace(/ /g, "+");
  return optimizedSearchQueryInput;
}

export const fetchImages = searchQueryInput => dispatch => {
  console.log(">>> in fetchImags()");
  dispatch({ type: FIRE_LOADING_ANIMATION });
  let searchQueryAfterOptimization;
  if (
    searchQueryInput === undefined ||
    searchQueryInput === null ||
    searchQueryInput === ""
  )
    searchQueryAfterOptimization = "big+dog";
  // will be the defualt.. Change? ???????????
  else {
    searchQueryAfterOptimization = optimizeQueryFunc(searchQueryInput);
  }
  fetch(
    `https://pixabay.com/api/?key=12214960-5b65c50dcdfde67eecdaa9198&q=${searchQueryAfterOptimization}&image_type=photo&pretty=true`
  )
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_IMAGES,
        payload: data.hits
      });
      // setTimeout(() => {
      //   dispatch({ type: STOP_LOADING_ANIMATION })
      // }, 230)
      dispatch({ type: STOP_LOADING_ANIMATION });
    });
};
export const displayImage = imageItemToDisplay => dispatch => {
  dispatch({
    type: DISPLAY_IMAGE,
    payload: imageItemToDisplay
  });
};

export const cleanSelectedImage = () => dispatch => {
  dispatch({
    type: CLEAN_SELECTED_IMAGE,
    payload: null
  });
};

export const pushImageToFavoritesInStore = imageObjToPush => dispatch => {
  dispatch({
    type: PUSH_IMAGE_TO_FAVORITES,
    payload: imageObjToPush
  });
  console.dir(store.getState());
};

export const fetchFavoritesImagesFromAsyncStorage = () => async dispatch => {
  let favoriteImagesFromAsyncStorage = await AsyncStorage.getItem(
    "listOfFavoriteImagesURL"
  );
  favoriteImagesFromAsyncStorage = JSON.parse(favoriteImagesFromAsyncStorage);
  dispatch({
    type: FETCH_FAVORITES_IMAGES_FROM_ASYNC_STORAGE,
    payload: favoriteImagesFromAsyncStorage
  });
};

export const changeFirstSearchFlag = () => dispatch => {
  dispatch({
    type: CHANGE_FIRST_SEARCH_FLAG,
    payload: true
  });
};
