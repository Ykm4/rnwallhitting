import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AppDispatch, useSelector } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { fetchShopWithPrivateRoom } from '../../../redux/modules/Gourmet/thunk';
import { ShopCard, ShopCardType } from '../../organisms/ShopCard';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { NewsTabParamList } from '../../../navigators/declaration';
import { TAB_NAME } from '../../../navigators/const/pagename';

type Props = {
  navigation: MaterialTopTabScreenProps<
    NewsTabParamList,
    typeof TAB_NAME.RESTAURANT_WITH_PRIVATE_ROOM
  >;
};

export const RestaurantWithPrivateRoom = ({ navigation }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const shops = useSelector((state) =>
    state.gourmet.restaurantWithPrivateRoom.map(
      ({ name, address, charter, photo }) => {
        const { l } = photo.mobile;
        return { name, address, charter, l };
      },
    ),
  );
  useEffect(() => {
    const promise = dispatch(fetchShopWithPrivateRoom());
    return () => {
      promise.abort();
    };
  }, []);
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
