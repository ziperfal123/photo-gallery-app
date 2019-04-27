import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'

import { fetchImages, cleanSelectedImage, changeFirstSearchFlag } from '../actions/imagesActions'

class SearchBarComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  updateSearch = searchValue => {
    this.setState({ searchValue })
  }

  handleSubmit = () => {
    console.log(this.searchRef.props.value)
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

// mapStateToProps = state => ({
//   didFirstSearchWasMadeAlready: state.imagesReducer.didFirstSearchWasMadeAlready
// });

export default connect(
  null,
  { fetchImages, cleanSelectedImage, changeFirstSearchFlag }
)(SearchBarComp)
