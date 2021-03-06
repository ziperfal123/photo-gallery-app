import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ImageItem from '../components/ImageItem'
import NoResultsFoundComp from '../components/NoResultsComp'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e9e9'
  },
  imagesGridViewContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f0e9e9',
    marginLeft: 2.5
  }
})

class FavoritesScreen extends Component {
  static navigationOptions = () => {
    const title = 'Favorites'
    return { title }
  }
  eachImage(item, key) {
    return <ImageItem key={key} item={item} imgSource={item.largeImageURL} />
  }

  render() {
    const { favoriteImagesList } = this.props
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imagesGridViewContainer}>
            {!favoriteImagesList ? (
              <NoResultsFoundComp
                messageToDisplay={'There are No images in the favorites list at the moment..'}
              />
            ) : (
              favoriteImagesList.map(this.eachImage)
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  favoriteImagesList: state.imagesReducer.arrOfFavoriteImages
})

FavoritesScreen.propTypes = {
  favoriteImagesList: PropTypes.array
}

export default connect(
  mapStateToProps,
  null
)(FavoritesScreen)
