import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/declaration';
import { PAGE_NAME_ROOT } from '../../../navigators/const/pagename';
import { PostList_1 } from './PostList_1';

type Props = {
  navigation: StackNavigationProp<
    RootStackParamList,
    typeof PAGE_NAME_ROOT.HOME
  >;
};

export function Home({ navigation }: Props) {
  const handlePress = useCallback(() => {
    navigation.navigate(PAGE_NAME_ROOT.TAB_RESTAURANT);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <PostList_1 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: 'black',
  },
  postWrap: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'aqua',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    width: 200,
  },
});
