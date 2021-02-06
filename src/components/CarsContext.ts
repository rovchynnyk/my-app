import { createContext } from 'react';
import { noop } from '../utils';

import { CarsDataT } from './Cars/types';

export type FiltersT = {
  color: string,
  manufacturer: string,
}

type ContextPropsT = {
  loading: boolean,
  filters: FiltersT,
  setLoading: (isLoading: boolean) => void,
  setFilters: (prevItems: FiltersT) => void,
  setCarsData: (items: CarsDataT) => void,
  carsData: CarsDataT,
  page: number,
  setPage: (payload: { type: string }) => void
}

export const CarsContext = createContext<ContextPropsT>({
  loading: false,
  filters: {
		color: '',
		manufacturer: '',
	},
  setLoading: noop,
  setFilters: noop,
  carsData: {
    cars: [],
    totalCarsCount: 0, 
	  totalPageCount: 0, 
  },
  setCarsData: noop,
  page: 1,
  setPage: noop,
});

export const { Provider } = CarsContext;
