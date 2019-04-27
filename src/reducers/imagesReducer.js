import {
  FETCH_IMAGES,
  DISPLAY_IMAGE,
  CLEAN_SELECTED_IMAGE,
  FETCH_FAVORITES_IMAGES_FROM_ASYNC_STORAGE,
  PUSH_IMAGE_TO_FAVORITES,
  CHANGE_FIRST_SEARCH_FLAG
} from '../actions/actionTypes'

const initialState = {
  images: [],
  selecetedImageItem: '',
  arrOfFavoriteImages: [],
  didFirstSearchWasMadeAlready: false
}

export default function(state = initialState, action) {
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
      return {
        ...state,
        arrOfFavoriteImages: state.arrOfFavoriteImages.concat(action.payload)
      }
    case CHANGE_FIRST_SEARCH_FLAG:
      return {
        ...state,
        didFirstSearchWasMadeAlready: true
      }
    default:
      return state
  }
}
