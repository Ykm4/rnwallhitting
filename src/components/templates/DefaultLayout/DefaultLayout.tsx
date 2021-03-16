import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../../../navigators';
import { SafeAreaView, View } from 'react-native';

export const DefaultLayout = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <RootNavigator />
      </View>
    </NavigationContainer>
  );
};
