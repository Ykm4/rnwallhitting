import { PAGE_NAME_ROOT, TAB_NAME } from '../const/pagename';

export type RootStackParamList = {
  [PAGE_NAME_ROOT.HOME]: undefined;
  [PAGE_NAME_ROOT.TAB_RESTAURANT]: undefined;
};

export type NewsTabParamList = {
  [TAB_NAME.RANDOM_RESTAURANT]: undefined;
  [TAB_NAME.RESTAURANT_WITH_PRIVATE_ROOM]: undefined;
};
