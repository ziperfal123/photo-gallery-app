import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types'

import { fetchImages, cleanSelectedImage, changeFirstSearchFlag } from '../actions/imagesActions'

class SearchBarComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this)
  }

  handleUpdateSearch(searchValue) {
    this.setState({ searchValue })
  }

  handleSubmit() {
    this.props.cleanSelectedImage()
    this.props.changeFirstSearchFlag()
    this.props.fetchImages(this.searchRef.props.value)
  }

  render() {
    const { searchValue } = this.state

    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.handleUpdateSearch}
          onSubmitEditing={this.handleSubmit}
          value={searchValue}
          ref={searchRef => {
            this.searchRef = searchRef
          }}
          lightTheme
        />
      </View>
    )
  }
}

SearchBarComp.propTypes = {
  fetchImages: PropTypes.func,
  cleanSelectedImage: PropTypes.func,
  changeFirstSearchFlag: PropTypes.func
}

export default connect(
  null,
  { fetchImages, cleanSelectedImage, changeFirstSearchFlag }
)(SearchBarComp)
