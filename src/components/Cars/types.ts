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
};

export type CarsDataT = {
	cars: CarItemT[], 
	totalCarsCount: number, 
	totalPageCount: number, 
};
