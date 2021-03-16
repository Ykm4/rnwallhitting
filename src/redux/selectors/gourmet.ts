import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ShopType } from '../modules/Gourmet/declaration';
import { ShopCardType } from '../../components/organisms/ShopCard';

export const gourmetSelector = createSelector<
  RootState,
  ShopType[],
  ShopCardType[]
>(
  (state) => state.gourmet.randomShop,
  (gourmetShop) =>
    gourmetShop.map(({ name, address, charter, photo }) => {
      const { l } = photo.mobile;
      return { name, address, charter, l };
    }),
);
