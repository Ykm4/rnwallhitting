import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { Post } from './Post';

type UserType = { id: number; name: string; avatar: string };

export type PostType = {
  id: number;
  caption: string;
  image: string;
  date: string;
  liked: boolean;
  user: UserType;
  comments: { id: number; content: string; user: UserType[] };
};

type Props = {
  posts: PostType[];
  handlePressLike: (postId: number) => void;
  handlePressUnLike: (postId: number) => void;
  handlePressComment: (postId: number) => void;
  handleOpenMenu: (postId: number) => void;
};

export const PostList_1 = () => {
  const keyExtractor = useCallback((item: PostType) => {
    return `${item.id}`;
  }, []);
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={PostList}
      renderItem={({ item: post }) => (
        <View style={styles.postWrap}>
          <Post post={post} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  postWrap: {
    marginBottom: 20,
  },
});
// const renderPost = useCallback(({ item }: { item: PostType }) => {
//   return (
//     <View style={styles.postWrap}>
//       <Post post={item} />
//     </View>
//   );
// }, []);
const PostList: PostType[] = [
  {
    id: 1,
    name: 'kuma',
    content: 'hoge',
    image:
      'https://images.unsplash.com/photo-1533117514952-a3cfdbb7f986?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN5YmVycHVua3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: '2021年3月16日',
  },
  {
    id: 2,
    name: 'kuma',
    content: 'hoge',
    image:
      'https://images.unsplash.com/photo-1501769752-a59efa2298ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: '2021年3月16日',
  },
  {
    id: 3,
    name: 'kuma',
    content: 'hoge',
    image:
      'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJwdW5rfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    date: '2021年3月16日',
  },
];
