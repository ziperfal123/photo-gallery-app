import { FETCH_IMAGES } from "../actions/actionTypes";
import { DISPLAY_IMAGE } from "../actions/actionTypes";

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
    default:
      return state;
  }
}
