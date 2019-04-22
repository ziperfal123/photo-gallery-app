import { combineReducers } from "redux";

import imagesReducer from "./imagesReducer";

const rootReducer = combineReducers({
  imagesReducer: imagesReducer
});

export default rootReducer;
