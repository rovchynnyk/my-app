import { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FAVOURITES } from "../../../constants";

import CarItem from "../CarItem";
import { CarItemT } from "../CarItem/CarItem";

import './Favourites.css';

const Favourites = () => {
  const [
    cars, setCars,
  ] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(FAVOURITES) ?? '[]');

    setCars(items);
  }, []);

  const removeItem = useCallback((id) => {
    const filteredItems = cars.filter((item: CarItemT) => {
      return item.stockNumber !== id;
    })

    localStorage.setItem(FAVOURITES, JSON.stringify(filteredItems));

    setCars(filteredItems);
  }, [cars]);

  return (
    <div className='Favourites-container'>
      <h2 className='Favourites-title'>
        Favourites
      </h2>

      {cars.length > 0 ? cars.map((car: JSX.IntrinsicAttributes & CarItemT) => {
        return (
          <div 
            className='Favourites-item-wrapper' 
            key={car.stockNumber}
          >
            <CarItem {...car} />
            <span 
              className='Favourites-remove-lnk'
              onClick={removeItem.bind(null, car.stockNumber)}
            >
              Remove
            </span>
          </div>
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
