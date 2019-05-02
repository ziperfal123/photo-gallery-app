import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../src/reducers/index'
import {
  cleanSelectedImage,
  changeFirstSearchFlag,
  displayImage,
  pushImageToFavoritesInStore
} from '../src/actions/imagesActions'

const middlewares = [thunk]
const initialState = {}

describe('actions functionality test', () => {
  it('cleanSelectedImage Action test', () => {
    const store = createStore(
      rootReducer,
      {
        ...initialState,
        imagesReducer: {
          arrOfFavoriteImages: [
            {
              comments: 3,
              downloads: 5168,
              favorites: 15,
              id: 932875,
              imageHeight: 2848,
              imageSize: 3223108,
              imageWidth: 4288,
              largeImageURL:
                'https://pixabay.com/get/e036b3072ff11c22d2524518b74d4494e273ebd319ac104490f6c77bafe4b1bb_1280.jpg',
              likes: 15,
              pageURL: 'https://pixabay.com/photos/kobe-bryant-action-figure-basketball-932875/',
              previewHeight: 99,
              previewURL:
                'https://cdn.pixabay.com/photo/2015/09/09/19/47/kobe-bryant-932875_150.jpg',
              previewWidth: 150,
              tags: 'kobe bryant, action figure, basketball',
              type: 'photo',
              user: 'tookapic',
              userImageURL: 'https://cdn.pixabay.com/user/2015/09/08/21-08-00-806_250x250.jpg',
              user_id: 1386459,
              views: 9332,
              webformatHeight: 425,
              webformatURL:
                'https://pixabay.com/get/e036b3072ff11c22d2524518b74d4494e273ebd319ac104490f6c77bafe4b1bb_640.jpg',
              webformatWidth: 640
            },
            {
              comments: '90downloads: 169652\nfavorites: 621\nid:2117310',
              imageHeight: 3317,
              imageSize: 7334335,
              imageWidth: 8947,
              largeImageURL:
                'https://pixabay.com/get/eb34b0082bf5013ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_1280.jpg',
              likes: 747,
              pageURL: 'https://pixabay.com/photos/panorama-miami-florida-water-usa-2117310/',
              previewHeight: 55,
              previewURL: 'https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_150.jpg',
              previewWidth: 150,
              tags: 'panorama, miami, florida',
              type: 'photo',
              user: 'pixexid',
              userImageURL: 'https://cdn.pixabay.com/user/2017/03/07/17-35-02-113_250x250.png',
              user_id: 4729217,
              views: 244013,
              webformatHeight: 237,
              webformatURL:
                'https://pixabay.com/get/eb34b0082bf5013ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_640.jpg',
              webformatWidth: 640
            }
          ],
          didFirstSearchWasMadeAlready: true,
          images: [
            {
              comments: 90,
              downloads: 169652,
              favorites: 621,
              id: 2117310,
              imageHeight: 3317,
              imageSize: 7334335,
              imageWidth: 8947,
              largeImageURL:
                'https://pixabay.com/get/eb34b0082bf5013ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_1280.jpg',
              likes: 747,
              pageURL: 'https://pixabay.com/photos/panorama-miami-florida-water-usa-2117310/',
              previewHeight: 55,
              previewURL: 'https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_150.jpg',
              previewWidth: 150,
              tags: 'panorama, miami, florida',
              type: 'photo',
              user: 'pixexid',
              userImageURL: 'https://cdn.pixabay.com/user/2017/03/07/17-35-02-113_250x250.png',
              user_id: 4729217,
              views: 244013,
              webformatHeight: 237,
              webformatURL:
                'https://pixabay.com/get/eb34b0082bf5013ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_640.jpg',
              webformatWidth: 640
            },
            {
              comments: 1,
              downloads: 24710,
              favorites: 179,
              id: 2203737,
              imageHeight: 3024,
              imageSize: 2589556,
              imageWidth: 4032,
              largeImageURL:
                'https://pixabay.com/get/eb37b10c2ff7063ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_1280.jpg',
              likes: 101,
              pageURL: 'https://pixabay.com/photos/tropical-palm-trees-miami-2203737/',
              previewHeight: 112,
              previewURL: 'https://cdn.pixabay.com/photo/2017/04/05/01/16/tropical-2203737_150.jpg',
              previewWidth: 150,
              tags: 'tropical, palm trees, miami',
              type: 'photo',
              user: 'PublicCo',
              userImageURL: 'https://cdn.pixabay.com/user/2017/04/05/16-14-58-44_250x250.png',
              user_id: 5009832,
              views: 39303,
              webformatHeight: 480,
              webformatURL:
                'https://pixabay.com/get/eb37b10c2ff7063ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_640.jpg',
              webformatWidth: 640
            }
          ],
          selecetedImageItem: {
            comments: 1,
            downloads: 24710,
            favorites: 179,
            id: 2203737,
            imageHeight: 3024,
            imageSize: 2589556,
            imageWidth: 4032,
            largeImageURL:
              'https://pixabay.com/get/eb37b10c2ff7063ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_1280.jpg',
            likes: 101,
            pageURL: 'https://pixabay.com/photos/tropical-palm-trees-miami-2203737/',
            previewHeight: 112,
            previewURL: 'https://cdn.pixabay.com/photo/2017/04/05/01/16/tropical-2203737_150.jpg',
            previewWidth: 150,
            tags: 'tropical, palm trees, miami',
            type: 'photo',
            user: 'PublicCo',
            userImageURL: 'https://cdn.pixabay.com/user/2017/04/05/16-14-58-44_250x250.png',
            user_id: 5009832,
            views: 39303,
            webformatHeight: 480,
            webformatURL:
              'https://pixabay.com/get/eb37b10c2ff7063ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5e4b5b8d0_640.jpg',
            webformatWidth: 640
          },
          shouldLoadingAnimationDisplay: false
        }
      },
      applyMiddleware(...middlewares)
    )
    store.dispatch(cleanSelectedImage())
    expect(store.getState().imagesReducer.selecetedImageItem).toEqual('')
  })

  it('changeFirstSearchFlag Action test', () => {
    const store = createStore(rootReducer, { ...initialState }, applyMiddleware(...middlewares))
    store.dispatch(changeFirstSearchFlag())
    expect(store.getState().imagesReducer.didFirstSearchWasMadeAlready).toEqual(true)
  })

  it('displayImage Action test', () => {
    const store = createStore(rootReducer, { ...initialState }, applyMiddleware(...middlewares))
    const dummyImageObjToTest = { dommyImage: 'NBA', dummyImageLikes: 100 }
    store.dispatch(displayImage(dummyImageObjToTest))
    expect(store.getState().imagesReducer.selecetedImageItem).toEqual(dummyImageObjToTest)
  })

  it('pushImageToFavoritesInStore Action test', () => {
    const store = createStore(rootReducer, { ...initialState }, applyMiddleware(...middlewares))
    const dummyImageObjToTest = { dommyImage: 'NBA', dummyImageLikes: 100 }
    store.dispatch(pushImageToFavoritesInStore(dummyImageObjToTest))
    expect(store.getState().imagesReducer.arrOfFavoriteImages).toContain(dummyImageObjToTest)
  })
})
