import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextImageBox } from '../../molecules/TextImageBox';
import { Button } from '../../atoms/Button';

// TODO: 型定義場所を修正する
export type ShopCardType = {
  name: string;
  address: string;
  charter: string;
  l: string;
};

type Props = {
  cardInfo: ShopCardType;
  handlePress: () => void;
};

export function ShopCard({ cardInfo, handlePress }: Props) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{cardInfo.name}</Text>
      <Text style={styles.author}>{cardInfo.address}</Text>
      <TextImageBox text={cardInfo.charter} imageUrl={cardInfo.l} />
      <View style={styles.buttonContainer}>
        {/* TODO: お気に入りボタンと外部リンクボタンをつける(もしくは詳細ページを作成) */}
        <Button handlePress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FAFAFA',
    borderColor: '#FAFAFA',
    borderWidth: 1,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  author: {
    fontSize: 12,
    marginBottom: 4,
  },
  imgCard: {},
  buttonContainer: {
    marginTop: 6,
  },
});
