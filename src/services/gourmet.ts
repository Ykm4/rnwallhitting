import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';
import { GourmetResponse } from '../redux/modules/Gourmet/declaration';

const axiosInstance = axios.create({
  baseURL: `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&format=json&midnight=1&midnight_meal=1&large_area=Z011`,
  timeout: 3000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

const fetchRestaurant = (areaQuery: string) =>
  axiosInstance.get<GourmetResponse>('', {
    params: {
      small_area: areaQuery,
    },
  });

const fetchRestaurantWithPrivateRoom = () =>
  axiosInstance.get<GourmetResponse>('', {
    params: {
      private_room: 1,
    },
  });

export default { fetchRestaurant, fetchRestaurantWithPrivateRoom };
