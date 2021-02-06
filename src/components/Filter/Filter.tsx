import { 
	useCallback, useContext, useEffect, useState,

} from 'react';
import axios from 'axios';

import Button from '../Button';
import useFetchCars from '../useFetchCars';
import { API_HOST, FIRST_PAGE } from '../../constants';
import { CarsContext } from '../CarsContext';

import Dropdown from './Dropdown';
import './Filter.css';

const Filter = () => {
	const { 
		filters, setFilters, setPage,
	 } = useContext(CarsContext);

	const [
		items, setItems,
	] = useState<any>({ // todo fix any type
		colors: [],
		manufacturers: [],
	});
	
	useEffect(() => {
		Promise.all([
			axios.get(`${API_HOST}/colors`),
			axios.get(`${API_HOST}/manufacturers`)
		]).then(([cResponse, mResponse]) => {
			const { data: { colors } } = cResponse;
			const { data: { manufacturers } } = mResponse;

			const normalizedManufacturers = manufacturers.reduce((acc: string[], el: { name: string; }) => {
				return [
					...acc, el.name,
				]
			}, []);

			setItems({
				manufacturers: normalizedManufacturers, 
				colors,
			})
		})
	}, []);

	const onCarFetch = useFetchCars();

	const handleButtonClick = useCallback(() => {
		const { color, manufacturer } = filters;

		onCarFetch({ color, manufacturer })
		setPage({ type: FIRST_PAGE });
	}, [
		filters, onCarFetch, setPage,
	]);

	const onItemClick = useCallback((itemTitle, dropdownTitle) => {
		const nextFilters = {
			...filters,
			[dropdownTitle]: itemTitle,
		}
		setFilters(nextFilters);
	}, [
		filters, setFilters,
	]);

	return (
		<div className='Filter-container'>
			<Dropdown 
				title='color' 
				initialValue={filters.color || 'All colors'} 
				items={items.colors}
				onItemClick={onItemClick}
			/>
			<Dropdown 
				title='manufacturer' 
				initialValue={filters.manufacturer || 'All manufacturers'} 
				items={items.manufacturers}
				onItemClick={onItemClick}
			/>

			<Button onClick={handleButtonClick}>
				Filter
			</Button>
		</div>
	)
};

export default Filter;
