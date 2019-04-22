import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { displayImage } from "../actions/imagesActions";

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "green",
    marginTop: 8
  },

  imageStyle: {
    width: 100,
    height: 110
    // borderRadius: 50
  },
  textContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "grey"
  },
  likesAndViewsContainerStyle: {
    backgroundColor: "gold",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  imgTitleStyle: {
    fontSize: 26,
    marginTop: 3,
    marginLeft: 20
  }
});

const ImageListItem = props => {
  const { title, views, likes, imgSource } = props;

  handleImagePress = () => {
    props.displayImage(imgSource);
  };

  return (
    <TouchableOpacity onPress={this.handleImagePress}>
      <View style={styles.containerStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `${imgSource}`
          }}
        />
        <View style={styles.textContainerStyle}>
          <Text style={styles.imgTitleStyle}>{title}</Text>
          <View style={styles.likesAndViewsContainerStyle}>
            <Text style={{ marginLeft: 20, fontSize: 14 }}>Views: {views}</Text>
            <Text style={{ marginLeft: 35, fontSize: 14 }}>Likes: {likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default connect(
  null,
  { displayImage }
)(ImageListItem);
