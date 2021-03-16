import React, { useCallback, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { AppDispatch, useSelector } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import {
  fetchRestaurant,
  getQueryByRandom,
  randomList,
} from '../../../redux/modules/Gourmet/thunk';
import { ShopCard, ShopCardType } from '../../organisms/ShopCard';
import { useRefresh } from './hooks/useRefresh';
import { gourmetSelector } from '../../../redux/selectors/gourmet';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { NewsTabParamList } from '../../../navigators/declaration';
import { TAB_NAME } from '../../../navigators/const/pagename';

type Props = {
  navigation: MaterialTopTabScreenProps<
    NewsTabParamList,
    typeof TAB_NAME.RANDOM_RESTAURANT
  >;
};

export const RandomRestaurant = ({ navigation }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { refreshing, onRefresh } = useRefresh();
  useEffect(() => {
    const randomQuery = getQueryByRandom(randomList);
    const promise = dispatch(fetchRestaurant(randomQuery));
    return () => {
      promise.abort();
    };
  }, []);

  const shops = useSelector(gourmetSelector);
  // TODO: useSelector vs reselectのパフォーマンスの挙動などをみてみたい
  // const shops: ShopCardType[] = useSelector((state) =>
  //   state.gourmet.shop.map(({ name, address, charter, photo }) => {
  //     const { l } = photo.mobile;
  //     return { name, address, charter, l };
  //   }),
  // );

  const keyExtractor = useCallback((item, index) => `${index}`, []);
  const renderItem = useCallback(({ item }: { item: ShopCardType }) => {
    return <ShopCard cardInfo={item} handlePress={handlePress} />;
  }, []);
  const handlePress = () => {
    console.log('pressed button');
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={shops}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={renderItem}
        onEndReached={(info) => {}}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
  },
});
