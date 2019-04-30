import {
  FETCH_IMAGES,
  DISPLAY_IMAGE,
  CLEAN_SELECTED_IMAGE,
  FETCH_FAVORITES_IMAGES_FROM_ASYNC_STORAGE,
  PUSH_IMAGE_TO_FAVORITES,
  CHANGE_FIRST_SEARCH_FLAG,
  FIRE_LOADING_ANIMATION,
  STOP_LOADING_ANIMATION
} from '../actions/actionTypes'

const initialState = {
  images: [],
  selecetedImageItem: '',
  arrOfFavoriteImages: [],
  didFirstSearchWasMadeAlready: false,
  shouldLoadingAnimationDisplay: false
}

export default function(state = initialState, action) {
  // console.log('action.type')
  // console.log(action.type)
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload
      }

    case DISPLAY_IMAGE:
      return {
        ...state,
        selecetedImageItem: action.payload
      }
    case CLEAN_SELECTED_IMAGE:
      return {
        ...state,
        selecetedImageItem: ''
      }
    case FETCH_FAVORITES_IMAGES_FROM_ASYNC_STORAGE:
      return {
        ...state,
        arrOfFavoriteImages: action.payload
      }
    case PUSH_IMAGE_TO_FAVORITES:
      return state.arrOfFavoriteImages === null || state.arrOfFavoriteImages === undefined
        ? {
            ...state,
            arrOfFavoriteImages: [action.payload]
          }
        : {
            ...state,
            arrOfFavoriteImages: state.arrOfFavoriteImages.concat(action.payload)
          }
    case CHANGE_FIRST_SEARCH_FLAG:
      return {
        ...state,
        didFirstSearchWasMadeAlready: true
      }
    case FIRE_LOADING_ANIMATION:
      // console.log("FIRE_LOADING_ANIMATION");
      return {
        ...state,
        shouldLoadingAnimationDisplay: true
      }

    case STOP_LOADING_ANIMATION:
      // console.log("STOP_LOADING_ANIMATION");
      return {
        ...state,
        shouldLoadingAnimationDisplay: false
      }

    default:
      return state
  }
}
