import { useState, useReducer, ReactNode, useMemo } from 'react';

import { 
  NEXT_PAGE, PREVIOUS_PAGE, LAST_PAGE, FIRST_PAGE,
 } from '../constants';

import { CarsDataT } from './Cars/types';
import { Provider } from './CarsContext';
import { FiltersT } from './CarsContext';

type PropsT = {
  children: ReactNode,
};

const reducer = (state: { page: number }, action: { type: string }) => {
  switch (action.type) {
    case FIRST_PAGE: 
      return { page: 1 };
    case NEXT_PAGE:
      return { page: state.page + 1};
    case PREVIOUS_PAGE:
      return { page: state.page - 1 };
    case LAST_PAGE: 
      return { page: 10 };
    default:
      return { page: 1 };
  }
}

const initialState = { page: 1 }

const CarsProvider = ({ children }: PropsT) => {
	const [
		filters, setFilters,
	] = useState<FiltersT>({
		color: '',
		manufacturer: '',
	});
  
  const [
    loading, setLoading,
  ] = useState<boolean>(false);

  const [
    carsData, setCarsData,
  ] = useState<CarsDataT>({
    cars: [],
    totalCarsCount: 0, 
	  totalPageCount: 0, 
  });

  const [
    { page }, setPage,
  ] = useReducer(reducer, initialState);

  const providerValues = useMemo(() => {
    return {
      loading, 
      filters,
      setLoading,
      setFilters,
      carsData,
      setCarsData,
      page,
      setPage,
    };
  }, [
    loading, 
    filters,
    setLoading,
    setFilters,
    carsData,
    setCarsData,
    page,
    setPage,
  ]);

  return (
    <Provider value={providerValues}>
      {children}
    </Provider>
  )
}

export default CarsProvider;
