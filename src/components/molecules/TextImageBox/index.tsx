import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
  imageUrl: string | null;
};

export function TextImageBox({ text, imageUrl }: Props) {
  console.log('render TextImageBox');
  return (
    <View style={styles.root}>
      <View style={styles.figure}>
        <Image source={{ uri: imageUrl || '' }} style={styles.img} />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardMessage} numberOfLines={4}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  figure: {
    marginRight: 15,
  },
  img: {
    width: 105,
    height: 75,
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 14,
  },
  cardMessage: {
    color: '#333',
    fontSize: 14,
  },
});
