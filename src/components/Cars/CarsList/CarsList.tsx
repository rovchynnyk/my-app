import { useContext, useMemo } from 'react';
import cn from 'classnames';

import Filter from '../../Filter';
import Pagination from '../../Pagination';
import CarSkeleton from '../CarSkeleton';
import CarItem from '../CarItem';
import { CarsContext } from '../../CarsContext';

import './CarsList.css';

const MAX_PAGE_ITEMS = 10;

const CarsList = () => {
	const {
		loading,
		page,
		carsData: { cars, totalCarsCount },
	} = useContext(CarsContext);

	const currentCount = useMemo(() => {
		return (page - 1) * MAX_PAGE_ITEMS + cars.length;
	}, [
		page, cars,
	]);

	return (
		<div className='CarList-container'>
			<Filter />

			<div className='CarList-items'>
				<h3 className='CarList-title'>
					Available Cars
				</h3>

				<span
					className={cn('CarList-amount', {'CarList-amount-loading': loading })}
				>
					Showing {currentCount} of {totalCarsCount > 100 ? 100 : totalCarsCount} results
				</span>

				<ul>
					{loading ? <CarSkeleton /> : (
						cars.map((car) => {
							return (
								<CarItem key={car.stockNumber} {...car} />
							)
						})
					)}
				</ul>

				<Pagination />
			</div>
		</div>
	)
};

export default CarsList;
