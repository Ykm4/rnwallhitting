import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MiddleItem } from './MiddleItem';

type Props = {};

export function LargeItem({}: Props) {
  console.log('render LargeItem');
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Large Item</Text>
      <MiddleItem />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D8D3F1',
    padding: 20,
  },
  text: { color: 'gray', fontSize: 18, textAlign: 'center' },
});
