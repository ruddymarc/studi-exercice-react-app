/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

function MenuItem({
  foodName, foodType, calories,
}) {
  return (
    <li className="MenuItem">
      <div className="MenuItem_Name">
        <h3 className="__heading">{foodName}</h3>
        {' '}
        <span className="__category">{`(${foodType})`}</span>
      </div>
      <span className="__calories">{`${calories} Kcal`}</span>
    </li>
  );
}

MenuItem.defaultProps = {
  foodType: 'unknown',
};

MenuItem.propTypes = {
  foodName: PropTypes.string.isRequired,
  foodType: PropTypes.string,
  calories: PropTypes.number.isRequired,
};

export default MenuItem;
