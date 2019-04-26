import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import ImageItem from '../components/ImageItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  imagesGridViewContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    marginLeft: 2.5
  }
})

class FavoritesScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = () => {
    const title = 'Favorites'
    return { title }
  }
  eachImage(itemParam, key) {
    console.log(itemParam)
    const item = {
      largeImageURL: itemParam.largeImageURL
    }
    return <ImageItem key={key} item={item} imgSource={item.largeImageURL} />
  }

  render() {
    const { favoriteImagesList } = this.props
    console.log(favoriteImagesList)
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imagesGridViewContainer}>
            {!favoriteImagesList ? <Text>00000</Text> : favoriteImagesList.map(this.eachImage)}
          </View>
        </ScrollView>
      </View>
    )
  }
}

mapStateToProps = state => ({
  favoriteImagesList: state.imagesReducer.arrOfFavoriteImages
})

export default connect(
  mapStateToProps,
  null
)(FavoritesScreen)
