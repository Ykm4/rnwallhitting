import React from 'react';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/styles';

export const LeftHeaderIcon = (
  props: StackHeaderLeftButtonProps,
): JSX.Element => {
  const { dispatch } = useNavigation();
  const onPress = React.useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, [dispatch]);
  return (
    <Icon.Button
      name="ios-menu"
      size={24}
      backgroundColor={colors.main}
      onPress={onPress}
    />
  );
};
