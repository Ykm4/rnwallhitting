import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TAB_NAME } from './const/pagename';
import { NewsTabParamList } from './declaration';
import { RandomRestaurant } from '../components/pages/RandomRestaurant';
import { RestaurantWithPrivateRoom } from '../components/pages/RestaurantWithPrivateRoom';

const Tab = createMaterialTopTabNavigator<NewsTabParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator lazy={true}>
      <Tab.Screen
        name={TAB_NAME.RANDOM_RESTAURANT}
        component={RandomRestaurant}
        options={{ title: 'お店一覧' }}
      />
      <Tab.Screen
        name={TAB_NAME.RESTAURANT_WITH_PRIVATE_ROOM}
        component={RestaurantWithPrivateRoom}
        options={{ title: 'お店一覧(個室)' }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  root: {},
});

/**
 * Root.Navigatorのheaderをnoneにした事でTabのHeaderにSafeAreaViewが効いていない。
 * → NavigationContainer直下にSafeAreaViewを起きRootNavigatorと並列にする事で解決した
 */
