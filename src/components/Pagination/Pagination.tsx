import { useCallback, useContext, useEffect } from 'react';

import useFetchCars from '../useFetchCars';
import { CarsContext } from '../CarsContext';
import { 
  NEXT_PAGE, PREVIOUS_PAGE, LAST_PAGE, FIRST_PAGE,
 } from '../../constants';

import './Pagination.css';

const Pagination = () => {
  const { 
    loading,
    filters, 
    page,
    setPage,
    carsData: { totalPageCount },
   } = useContext(CarsContext);

  const onPageChange = useCallback((param) => {
    return () => {
      setPage(param);
    }
  }, [setPage]);

  const onCarFetch = useFetchCars();

  useEffect(() => {
    onCarFetch({ page, ...filters });
  }, [
    page, onCarFetch,
  ]);    

  if (loading || totalPageCount === 1) {
    return null;
  }

  return (
    <ul className='Pagination-сontainer'>
      {page > 1 && (
        <>
          <li 
            className='Pagination-сontainer-item' 
            onClick={onPageChange({ type: FIRST_PAGE })}
          >
            First
          </li>
          <li 
            className='Pagination-сontainer-item'
            onClick={onPageChange({ type: PREVIOUS_PAGE })}
          >
            Previous
          </li>
        </>
      )}
      <li className='Pagination-сontainer-item Pagination-current'>
        Page {page} of {totalPageCount}
      </li>
      {page < totalPageCount && (
        <>
          <li 
            className='Pagination-сontainer-item' 
            onClick={onPageChange({ type: NEXT_PAGE })}
          >
            Next
          </li>
          <li 
            className='Pagination-сontainer-item' 
            onClick={onPageChange({ type: LAST_PAGE })}
          >
            Last
          </li>
        </>
      )}
    </ul>
  )
};

export default Pagination;
