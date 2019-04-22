import {
  FETCH_IMAGES,
  DISPLAY_IMAGE,
  CLEAN_SELECTED_IMAGE
} from "../actions/actionTypes";

const initialState = {
  images: [],
  selecetedImageURL: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload
      };

    case DISPLAY_IMAGE:
      return {
        ...state,
        selecetedImageURL: action.payload
      };
    case CLEAN_SELECTED_IMAGE:
      return {
        ...state,
        selecetedImageURL: ""
      };

    default:
      return state;
  }
}
