import { Link } from 'react-router-dom';

import './CarItem.css';

export type CarItemT = {
	color: string,
	fuelType: 'Diesel' | 'Petrol'
	manufacturerName: string,
	mileage: {
			number: number, 
			unit: "km"
	},
	modelName: string,
	pictureUrl: string,
	stockNumber: number,
}

const CarItem = ({ 
	modelName, 
	stockNumber, 
	mileage, 
	fuelType, 
	color,
	pictureUrl,
 }: CarItemT) => {
	return (
		<li className='CarItem-container'>
			<span className='CarItem-img-container'>
				{/* <img 
					alt={modelName} 
					className='CarItem-img'
					src={pictureUrl} 
				/> */}
			</span>

			<section className='CarItem-description'>
				<h3 className='CarItem-title'>
					{modelName}
				</h3>

				<p className='CarItem-meta'>
					Stock # {stockNumber} - {mileage.number} {mileage.unit.toUpperCase()} - {fuelType} - {color}
				</p> 

				<Link 
					to={`/detail/${stockNumber}`}
					className='CarItem-link'
				>
					See more details
				</Link>
			</section>
		</li>
	)
};

export default CarItem;
