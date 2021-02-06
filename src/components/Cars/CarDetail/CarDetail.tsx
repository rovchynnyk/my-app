import { 
	useCallback, useContext, useEffect, useState,
 } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Button from '../../Button';
import { capitalize } from '../../../utils';
import { CarsContext } from '../../CarsContext';
import { CarItemT } from '../CarItem/CarItem';
import { API_HOST } from '../../../constants';

import './CarDetail.css';

const FAVOURITES = 'favourites';

const CarDetail = () => {
	const { id } = useParams<any>();

	const { carsData: { cars } } = useContext(CarsContext);

	const [
		car, setCar,
	] = useState<CarItemT | null>(null);

	useEffect(() => {
		if (!cars.length) {
			axios.get(`${API_HOST}/cars/${id}`).then(({ data: { car } }) => {
				setCar(car)
			})

			return;
		}

		const savedCar = cars.find((c) => {
			return c.stockNumber === +id;
		}) 

		setCar(savedCar as CarItemT);
	}, [
		id, cars,
	]);	

	const saveToFavourites = useCallback(() => {
		const savedItems = localStorage.getItem(FAVOURITES) ?? '[]';
		
		localStorage.setItem(FAVOURITES, JSON.stringify([
			...JSON.parse(savedItems) ,
			car,
		]));
	}, [car]);

	if (!car) {
		return null;
	}

	return (
		<>
			<div className='CarDetail-hero'>
				<img src={car.pictureUrl} alt="Hero"/>
			</div>
			<div className='CarDetail-container'>
				<section className='CarDetail-description'>
					<h3 className='CarDetail-title'>
						{car.modelName}
					</h3>
					
					<p className='CarDetail-dimensions'>
						Stock # {car.stockNumber} - {car.mileage.number} {car.mileage.unit.toUpperCase()} - {car.fuelType} - {capitalize(car.color)}
					</p> 

					<p>
						This car is available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may be change due to bad weather conditions.
					</p>
				</section>
				
				<section className='CarDetail-save'>
					<p>
						If you like this car, click the button and save it in your collection of favourite items
					</p>	

					<Button onClick={saveToFavourites}>
						Save
					</Button>
				</section>
			</div>
		</>
	)
};

export default CarDetail;
