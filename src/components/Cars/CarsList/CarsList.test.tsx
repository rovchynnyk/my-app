import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react';

import { CarsDataT } from '../types';

import CarsList from './CarsList';

const mockContextData = (data: {
  loading: boolean,
  page: number,
  carsData: CarsDataT | null,
}) => {
  jest.spyOn(React, 'useContext').mockImplementation(() => {
    return data;
  });
};

jest.mock('../../Filter', () => () => <div/>);

jest.mock('../../Pagination', () => () => <div/>);


describe('CarsList', () => {
  let container: Element | DocumentFragment | null = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should correctly render the component', () => {
    mockContextData({
      loading: false,
      page: 2,
      carsData: {
        cars: [
          {
            color: "green",
            fuelType: "Petrol",
            manufacturerName: "Fiat",
            mileage: {
              number: 194513, 
              unit: "km"
            },
            modelName: "Grande Punto",
            pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
            stockNumber: 10070,
          }
        ],
        totalCarsCount: 11,
        totalPageCount: 2,
      }
    });

    render((
      <MemoryRouter>
        <CarsList />
      </MemoryRouter>
    ), container)
    
    const pageTitle = screen.getByText(/Showing 11 of 11 results/i);
    expect(pageTitle).toBeInTheDocument();

    expect(container?.querySelector('ul')?.childNodes).toHaveLength(1);
  });

  it('should render skeleton', () => {
    mockContextData({
      loading: true,
      page: 2,
      carsData: null,
    });

    expect(container?.querySelector('ul')).toBeFalsy();
  })

});
