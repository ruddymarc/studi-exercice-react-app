/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import './Restaurant.css';

function Restaurant({ restaurant, foodItems }) {
  const menus = foodItems.map((menu) => <MenuItem key={menu.id} {...menu} />);

  return (
    <div className="Restaurant">
      <h2>{ restaurant }</h2>
      <ul className="Menus">{ menus }</ul>
    </div>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.string.isRequired,
  foodItems: PropTypes.arrayOf(PropTypes.shape({
    foodName: PropTypes.string.isRequired,
    foodType: PropTypes.string,
    calories: PropTypes.number.isRequired,
  })).isRequired,
};

export default Restaurant;
