import GourmetServices from '../../../services/gourmet';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GourmetResultType } from './declaration';

export const randomList = [
  'X090',
  'X086',
  'X100',
  'XA4S',
  'XA4T',
  'XA4U',
  'XA52',
  'XA51',
];
export function getQueryByRandom(randomList: string[]) {
  const randomInt = Math.floor(Math.random() * Math.floor(randomList.length));
  return randomList[randomInt];
}

export const fetchRestaurant = createAsyncThunk<GourmetResultType, string>(
  'fetchRestaurant',
  async (params) => {
    const { data } = await GourmetServices.fetchRestaurant(params);
    return data.results;
  },
);

export const fetchShopWithPrivateRoom = createAsyncThunk<GourmetResultType>(
  'fetchShopWithPrivateRoom',
  async () => {
    const response = await GourmetServices.fetchRestaurantWithPrivateRoom();
    return response.data.results;
  },
);
