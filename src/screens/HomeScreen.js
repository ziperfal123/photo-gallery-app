import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchBarComp from '../components/SearchBarComp'
import ImageItem from '../components/ImageItem'
import NoResultComp from '../components/NoResultsComp'
import ImageListItem from '../components/ImageListItem'
import WelcomeComp from '../components/WelcomeComp'
import {
  fetchImages,
  cleanSelectedImage,
  fetchFavoritesImagesFromAsyncStorage
} from '../actions/imagesActions'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  favoritesBtn: {
    fontSize: 45,
    color: 'white'
  },
  imagesGridViewContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    marginLeft: 2.5
  },
  imagesListViewContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  btnsContainer: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'pink'
  },
  btnStyle: {
    width: '50%',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedBtnStyle: {
    width: '50%',
    backgroundColor: 'blue',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingAniationStyle: {
    marginTop: 200
    // backgroundColor: 'green',
    // display: 'true'
  }
})

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldGridDisplay: true
    }
    this.handleGridViewPress = this.handleGridViewPress.bind(this)
    this.handleListViewPress = this.handleListViewPress.bind(this)
    this.checkWhatToRenderInHomeScreenBody = this.checkWhatToRenderInHomeScreenBody.bind(this)
  }

  static navigationOptions = ({ navigation }) => {
    const title = 'HomeScreen'
    const headerRight = (
      <Button
        style={styles.favoritesBtn}
        onPress={() => navigation.navigate('FavoritesScreen')}
        title="Favorites"
      />
    )

    return { title, headerRight }
  }

  async componentDidMount() {
    // this.props.fetchImages()
    await this.props.fetchFavoritesImagesFromAsyncStorage()
  }

  eactImageGridView(item, key) {
    return <ImageItem key={key} item={item} imgSource={item.largeImageURL} />
  }

  eactImageListView(item, key) {
    return (
      <ImageListItem
        key={key}
        imgSource={item.largeImageURL}
        item={item}
        title={item.tags}
        views={item.views}
        likes={item.likes}
      />
    )
  }

  handleGridViewPress() {
    this.props.cleanSelectedImage()
    this.setState({ shouldGridDisplay: true })
  }
  handleListViewPress() {
    this.props.cleanSelectedImage()
    this.setState({ shouldGridDisplay: false })
  }

  checkWhatToRenderInHomeScreenBody() {
    const { images, didFirstSearchWasMadeAlready } = this.props
    if (didFirstSearchWasMadeAlready === false) {
      return <WelcomeComp />
    } else if (images.length === 0 && didFirstSearchWasMadeAlready === true) {
      return <NoResultComp messageToDisplay={'but hi!  try again...'} />
    }
    return this.state.shouldGridDisplay ? (
      <View style={styles.imagesGridViewContainer}>{images.map(this.eactImageGridView)}</View>
    ) : (
      <View style={styles.imagesListViewContainer}>{images.map(this.eactImageListView)}</View>
    )
  }

  render() {
    console.log('Animation on..')
    console.log(this.props.shouldLoadingAnimationDisplay)
    console.log(this.props.images)
    const { selecetedImageItem } = this.props
    if (
      selecetedImageItem !== '' &&
      selecetedImageItem !== null &&
      selecetedImageItem !== undefined
    )
      this.props.navigation.push('FullScreenDisplay')

    const homeScreenPageBody = this.checkWhatToRenderInHomeScreenBody()

    return (
      <View style={styles.container}>
        <SearchBarComp />
        <View style={styles.btnsContainer}>
          <TouchableOpacity
            onPress={this.handleGridViewPress}
            style={this.state.shouldGridDisplay ? styles.selectedBtnStyle : styles.btnStyle}
          >
            <Text>Grid View</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleListViewPress}
            style={this.state.shouldGridDisplay ? styles.btnStyle : styles.selectedBtnStyle}
          >
            <Text>List View</Text>
          </TouchableOpacity>
        </View>
        {this.props.shouldLoadingAnimationDisplay ? (
          <ActivityIndicator style={styles.loadingAniationStyle} size="large" color="#0000ff" />
        ) : (
          <ScrollView>{homeScreenPageBody}</ScrollView>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  images: state.imagesReducer.images,
  selecetedImageItem: state.imagesReducer.selecetedImageItem,
  didFirstSearchWasMadeAlready: state.imagesReducer.didFirstSearchWasMadeAlready,
  shouldLoadingAnimationDisplay: state.imagesReducer.shouldLoadingAnimationDisplay
})

HomeScreen.propTypes = {
  fetchImages: PropTypes.func,
  cleanSelectedImage: PropTypes.func,
  fetchFavoritesImagesFromAsyncStorage: PropTypes.func,
  images: PropTypes.array,
  selecetedImageItem: PropTypes.string,
  didFirstSearchWasMadeAlready: PropTypes.bool,
  navigation: PropTypes.object
}

export default connect(
  mapStateToProps,
  { fetchImages, cleanSelectedImage, fetchFavoritesImagesFromAsyncStorage }
)(HomeScreen)
