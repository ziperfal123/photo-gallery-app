import { FETCH_IMAGES } from "./actionTypes";
import { DISPLAY_IMAGE } from "./actionTypes";

function optimizeQueryFunc(searchQueryInput) {
  let optimizedSearchQueryInput = searchQueryInput.replace(/ /g, "+");
  return optimizedSearchQueryInput;
}

export const fetchImages = searchQueryInput => dispatch => {
  let searchQueryAfterOptimization;
  if (
    searchQueryInput === undefined ||
    searchQueryInput === null ||
    searchQueryInput === ""
  )
    searchQueryAfterOptimization = "big+dog";
  // will be the defualt.. Change?
  else {
    searchQueryAfterOptimization = optimizeQueryFunc(searchQueryInput);
  }
  fetch(
    `https://pixabay.com/api/?key=12214960-5b65c50dcdfde67eecdaa9198&q=${searchQueryAfterOptimization}&image_type=photo&pretty=true`
  )
    .then(res => res.json())
    .then(data => {
      console.log("dispatch!");
      console.log(data);
      console.log(data.hits);
      dispatch({
        type: FETCH_IMAGES,
        payload: data.hits
      });
    });
};

export const displayImage = urlToDisplay => dispatch => {
  dispatch({
    type: DISPLAY_IMAGE,
    payload: urlToDisplay
  });
};
