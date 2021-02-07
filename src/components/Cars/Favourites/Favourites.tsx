import { useMemo } from "react";
import { Link } from 'react-router-dom';

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
      }) : (
        <p className='Favourites-description'>
          No saved items. <br/>
          You can always go back to the <Link to='/' className='NotFound-link'>homepage</Link>.
        </p>
      )}
    </div>
  );
};

export default Favourites;
