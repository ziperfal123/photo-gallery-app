import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { connect } from "react-redux";

import SearchBarComp from "../components/SearchBarComp";
import ImageItem from "../components/ImageItem";
import ImageListItem from "../components/ImageListItem";
import { fetchImages } from "../actions/imagesActions";

const styles = StyleSheet.create({
  imagesGridViewContainer: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F5FCFF",
    marginLeft: 2.5
  },
  imagesListViewContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1
  },
  btnsContainer: {
    backgroundColor: "pink",
    flexDirection: "row"
  },
  btnStyle: {
    width: "50%",
    backgroundColor: "red",
    borderColor: "black"
  }
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldGridDisplay: true
    };
    this.handleGridViewPress = this.handleGridViewPress.bind(this);
    this.handleListViewPress = this.handleListViewPress.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    let title = "HomeScreen";
    let headerRight = (
      <Button
        style={{ fontSize: 45, color: "white" }}
        onPress={() => navigation.navigate("FavoritesScreen")}
        title="Favorites"
      />
    );
    return { title, headerRight };
  };

  componentDidMount() {
    this.props.fetchImages();
  }

  eactImageGridView(item, key) {
    return <ImageItem key={key} item={item} imgSource={item.largeImageURL} />;
  }

  eactImageListView(item, key) {
    return (
      <ImageListItem
        key={key}
        imgSource={item.largeImageURL}
        title={"someTitle"}
        views={item.views}
        likes={item.likes}
      />
    );
  }

  handleGridViewPress() {
    // this.props.navigation.push("FullScreenDisplay");
    console.log("Grid View");
    this.setState({ shouldGridDisplay: true });
  }
  handleListViewPress() {
    console.log("List View");
    this.setState({ shouldGridDisplay: false });
  }

  render() {
    const { images, selecetedImageURL } = this.props;
    if (selecetedImageURL != "" && selecetedImageURL != null) {
      this.props.navigation.push("FullScreenDisplay");
    }
    return (
      <View style={styles.container}>
        <SearchBarComp />
        <View style={styles.btnsContainer}>
          <Button
            title="Grid View"
            color="green"
            onPress={this.handleGridViewPress}
          />
          <Button
            title="List View"
            color="green"
            onPress={this.handleListViewPress}
          />
        </View>

        <ScrollView>
          {this.state.shouldGridDisplay ? (
            <View style={styles.imagesGridViewContainer}>
              {images.map(this.eactImageGridView)}
            </View>
          ) : (
            <View style={styles.imagesListViewContainer}>
              {images.map(this.eactImageListView)}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

mapStateToProps = state => ({
  images: state.imagesReducer.images,
  selecetedImageURL: state.imagesReducer.selecetedImageURL
});

export default connect(
  mapStateToProps,
  { fetchImages }
)(HomeScreen);
