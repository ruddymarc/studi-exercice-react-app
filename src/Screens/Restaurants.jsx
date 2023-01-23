/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Restaurant from '../Components/Restaurant';
import data from './food.json';

function Restaurants() {
  const foodData = data.map((dataItem) => ({
    ...dataItem,
    foodItems: dataItem.foodItems.map((foodItem) => (
      { id: Math.random(), ...foodItem }
    )),
  }));

  return (
    <div className="Restaurants">
      { foodData.map((foods) => (
        <Restaurant key={foods.restaurant} {...foods} />
      )) }
    </div>
  );
}

export default Restaurants;
