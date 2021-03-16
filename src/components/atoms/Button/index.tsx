import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  handlePress: () => void;
};

export function Button({ handlePress }: Props) {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>外部サイトで記事を見る</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderColor: '#007FC3',
    borderWidth: 1,
    backgroundColor: '#007FC3',
    borderRadius: 20,
    paddingVertical: 10,
  },
  buttonText: {
    borderRadius: 20,
    color: 'white',
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    fontWeight: '700',
    textAlign: 'center',
    overflow: 'hidden',
  },
});
