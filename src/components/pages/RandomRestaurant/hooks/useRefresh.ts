import { AppDispatch } from '../../../../redux/store';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import {
  fetchRestaurant,
  getQueryByRandom,
  randomList,
} from '../../../../redux/modules/Gourmet/thunk';

export function useRefresh() {
  const dispatch: AppDispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const randomQuery = getQueryByRandom(randomList);
    await dispatch(fetchRestaurant(randomQuery));
    setRefreshing(false);
  }, []);
  return { refreshing, onRefresh };
}
