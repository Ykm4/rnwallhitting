import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};

export function SmallItem({}: Props) {
  console.log('render SmallItem');
  return (
    <View style={styles.root}>
      <Text style={{ color: 'gray', textAlign: 'center', fontSize: 18 }}>
        hoge
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D3F1F1',
    padding: 20,
    margin: 20,
  },
});
