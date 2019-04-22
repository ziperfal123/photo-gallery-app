import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "80%",
    marginTop: "15%"
  }
});

const FullImageDisplayScreen = props => {
  const { selecetedImageURL } = props;
  console.log(selecetedImageURL);
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={{
          uri: `${selecetedImageURL}`
        }}
      />
      <Text>LIKE!</Text>
    </View>
  );
};

mapStateToProps = state => ({
  selecetedImageURL: state.imagesReducer.selecetedImageURL
});

export default connect(
  mapStateToProps,
  null
)(FullImageDisplayScreen);
