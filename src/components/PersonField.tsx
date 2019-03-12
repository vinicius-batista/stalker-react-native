import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {
  fieldName: String
  fieldValue: String | number
}

function PersonField (props: IProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{props.fieldName}</Text>
      <Text style={styles.label}>{props.fieldValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    marginBottom: 10
  },
  label: {
    fontSize: 16,
    padding: 5
  }
})

export default PersonField
