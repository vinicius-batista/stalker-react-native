import React from 'react'
import { FlatList, Image, StyleSheet } from 'react-native'

type Props = {
  photos: string[]
}

const styles = StyleSheet.create({
  imagePreview: {
    width: 200,
    height: 200
  }
})

function Gallery(props: Props) {
  return props.photos !== [] ? (
    <FlatList
      data={props.photos}
      numColumns={2}
      renderItem={({ item, index }) => (
        <Image key={index} style={styles.imagePreview} source={{ uri: item }} />
      )}
    />
  ) : null
}

export default Gallery
