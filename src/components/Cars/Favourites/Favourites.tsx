import { useMemo } from "react";

import CarItem from "../CarItem";
import { CarItemT } from "../CarItem/CarItem";

import './Favourites.css';

const Favourites = () => {
  const cars = useMemo(() => {
    return JSON.parse(localStorage.getItem('favourites') ?? '{}');
  }, []);

  return (
    <div className='Favourites-container'>
      <h2 className='Favourites-title'>
        Favourites
      </h2>

      {cars.length > 0 ? cars.map((car: JSX.IntrinsicAttributes & CarItemT) => {
        return (
          <CarItem 
            key={car.stockNumber} 
            {...car} 
          />
        );
      }) : 'No saved items'}
    </div>
  );
};

export default Favourites;
