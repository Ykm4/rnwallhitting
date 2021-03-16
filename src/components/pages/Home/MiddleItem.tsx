import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SmallItem } from './SmallItem';

type Props = {};

export function MiddleItem({}: Props) {
  console.log('render MiddleItem');
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Middle Item</Text>
      <SmallItem />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D3E4F1',
    padding: 20,
    margin: 20,
  },
  text: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
  },
});
