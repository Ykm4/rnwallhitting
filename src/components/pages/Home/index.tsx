import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/declaration';
import { PAGE_NAME_ROOT } from '../../../navigators/const/pagename';

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
      <Text>home</Text>
      <TouchableHighlight onPress={handlePress}>
        <Text style={styles.btn}>お店一覧タブ遷移</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 20,
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
