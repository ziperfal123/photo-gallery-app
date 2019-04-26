import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'

import { fetchImages, cleanSelectedImage } from '../actions/imagesActions'

class SearchBarComp extends Component {
  state = {
    searchValue: ''
  }

  updateSearch = searchValue => {
    this.setState({ searchValue })
  }

  handleSubmit = () => {
    console.log(this.searchRef.props.value)
    this.props.cleanSelectedImage()
    this.props.fetchImages(this.searchRef.props.value)
  }

  render() {
    const { searchValue } = this.state

    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          onSubmitEditing={this.handleSubmit}
          value={searchValue}
          ref={searchRef => {
            this.searchRef = searchRef
          }}
          lightTheme={(platform = 'default')} // YES????????
        />
      </View>
    )
  }
}

export default connect(
  null,
  { fetchImages, cleanSelectedImage }
)(SearchBarComp)
