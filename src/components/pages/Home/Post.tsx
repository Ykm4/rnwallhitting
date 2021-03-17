import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PostType } from './PostList_1';

type PostProps = {
  post: PostType;
};

// styleを継承したい(文字色など)
export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          {/*image*/}
          <Text style={styles.userName}>{post.name}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.dot}>•••</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <View style={styles.buttonWrap}>
        <Text>❤️</Text>
        <Text>✍️</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={styles.content}>
          <Text>{post.content}</Text>
          <Text>{post.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  userInfo: {},
  userName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  dot: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  image: {
    height: 100,
    width: '100%',
  },
  buttonWrap: {},
  content: {},
});
