import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../components/pages/Home';
import { TabNavigator } from './TabNavigator';
import { PAGE_NAME_ROOT } from './const/pagename';
import { RootStackParamList } from './declaration';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={PAGE_NAME_ROOT.HOME} component={Home} />
      <RootStack.Screen
        name={PAGE_NAME_ROOT.TAB_RESTAURANT}
        component={TabNavigator}
      />
    </RootStack.Navigator>
  );
};
