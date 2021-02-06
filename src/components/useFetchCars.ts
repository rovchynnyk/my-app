import { useCallback, useContext } from 'react';
import axios from 'axios';

import { CarsContext } from './CarsContext';
import { API_HOST } from '../constants';

const useFetchCars = () => {
  const { setCarsData, setLoading } = useContext(CarsContext);

  return useCallback(({ color, manufacturer, page = 1 }) => {
    setLoading(true);

    axios.get(`${API_HOST}/cars?color=${color}&manufacturer=${manufacturer}&page=${page}`)
    .then(({ data: { cars, totalCarsCount, totalPageCount } }) => {
      setCarsData({
        cars, 
        totalCarsCount, 
        totalPageCount,
      });
    })
    .finally(() => {
      setLoading(false);
    });
  }, [
    setCarsData,
    setLoading,
  ]);  
};

export default useFetchCars;
