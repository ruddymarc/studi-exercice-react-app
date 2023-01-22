/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import './UserCard.css';

function UserCard({
  picture, firstname, lastname, age, location, interests,
}) {
  const userFullName = [firstname, lastname].join(' ');
  const userAge = `${age} ${age > 1 ? ' ans' : ' an'}`;
  return (
    <header className="UserCard Row-wrapper">
      <img src={picture} alt="profile-img" />
      <div className="__content">
        <h2 className="__heading">{`${userFullName}, ${userAge}`}</h2>
        <span className="__location">{Object.values(location).join(', ')}</span>
        <div
          className="Row-wrapper"
          style={{ justifyContent: 'center' }}
        >
          <Section title="Interests">
            <span style={{ fontSize: '3em', margin: 'auto' }}>{ interests.length }</span>
          </Section>
        </div>
      </div>
    </header>
  );
}

UserCard.defaultProps = {
  picture: 'https://dummyimage.com/200/fff/aaa',
  firstname: '',
  lastname: '',
  age: 0,
  location: { country: '', city: '' },
  interests: [],
};

UserCard.propTypes = {
  picture: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number,
  location: PropTypes.exact({
    country: PropTypes.string,
    city: PropTypes.string,
  }),
  interests: PropTypes.arrayOf(PropTypes.string),
};

export default UserCard;
