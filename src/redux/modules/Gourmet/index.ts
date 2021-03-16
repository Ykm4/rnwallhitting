import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GourmetResultType, GourmetState } from './declaration';
import { fetchRestaurant, fetchShopWithPrivateRoom } from './thunk';

export const initialState: GourmetState = {
  randomShop: [],
  restaurantWithPrivateRoom: [],
};

const slice = createSlice({
  name: 'gourmet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRestaurant.fulfilled,
      (state, { payload }: PayloadAction<GourmetResultType>) => {
        state.randomShop = payload.shop;
      },
    );
    builder.addCase(
      fetchShopWithPrivateRoom.fulfilled,
      (state, { payload }: PayloadAction<GourmetResultType>) => {
        state.restaurantWithPrivateRoom = payload.shop;
      },
    );
  },
});

export default slice.reducer;
export const {} = slice.actions;
