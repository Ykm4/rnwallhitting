import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ArticleType } from '../../../services/news';
import { TextImageBox } from '../TextImageBox';
import { Button } from '../../atoms/Button';

type Props = {
  article: ArticleType;
  handlePress: () => void;
};

export function Card({ article, handlePress }: Props) {
  console.log('render Card');
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>{article.author}</Text>
      <TextImageBox text={article.description} imageUrl={article.urlToImage} />
      <View style={styles.buttonContainer}>
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
