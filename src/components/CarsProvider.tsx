import { useState, ReactNode, useMemo } from 'react';

import { CarsDataT } from './Cars/types';
import { Provider } from './CarsContext';
import { FiltersT } from './CarsContext';

type PropsT = {
  children: ReactNode,
};

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
    page, setPage,
  ] = useState(1);

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
