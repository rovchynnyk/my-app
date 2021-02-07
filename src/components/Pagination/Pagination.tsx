import { useCallback, useContext, useEffect } from 'react';

import useFetchCars from '../useFetchCars';
import { CarsContext } from '../CarsContext';

import './Pagination.css';

const Pagination = () => {
  const { 
    loading,
    filters, 
    page,
    setPage,
    carsData: { totalPageCount },
   } = useContext(CarsContext);

  const onCarFetch = useFetchCars();

  useEffect(() => {
    onCarFetch({ page, ...filters });
  }, [ // eslint-disable-line react-hooks/exhaustive-deps
    page, onCarFetch,
  ]);    
  
  const handleNextPage = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage)
  }, [
    page, setPage,
  ])

  const handlePreviousPage = useCallback(() => {
    const prevPage = page - 1;
    setPage(prevPage)
  }, [
    page, setPage,
  ])

  if (loading || totalPageCount === 1) {
    return null;
  }

  return (
    <ul className='Pagination-сontainer'>
      {page > 1 && (
        <>
          <li 
            className='Pagination-сontainer-item' 
            onClick={setPage.bind(null, 1)}
          >
            First
          </li>
          <li 
            className='Pagination-сontainer-item'
            onClick={handlePreviousPage}
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
            onClick={handleNextPage}
          >
            Next
          </li>
          <li 
            className='Pagination-сontainer-item' 
            onClick={setPage.bind(null, totalPageCount)}
          >
            Last
          </li>
        </>
      )}
    </ul>
  )
};

export default Pagination;
