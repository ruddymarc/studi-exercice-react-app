/* eslint-disable import/no-extraneous-dependencies */
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
  const displayInterests = interests.map((interest) => (
    <span key={interest} className="interest">{interest}</span>
  ));

  return (
    <>
      <header className="UserCard Row-wrapper">
        <img src={picture} alt="profile-img" />
        <div className="__content">
          <h2 className="__heading">{`${userFullName}, ${userAge}`}</h2>
          <span className="__location">{Object.values(location).join(', ')}</span>
          <div
            className="Row-wrapper"
            style={{ justifyContent: 'center' }}
          >
            { interests.length > 0 && (
              <Section title="Interests">
                <span style={{ fontSize: '3em', margin: 'auto' }}>{ interests.length }</span>
              </Section>
            ) }
          </div>
        </div>
      </header>
      <main>
        { interests.length > 0 && (
          <Section title="Center of interest">
            {displayInterests}
          </Section>
        ) }
      </main>
    </>
  );
}

UserCard.defaultProps = {
  lastname: 'Doe',
  location: { country: 'United States', city: 'Anaheim' },
  interests: [],
};

UserCard.propTypes = {
  picture: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
  age: PropTypes.number.isRequired,
  location: PropTypes.exact({
    country: PropTypes.string,
    city: PropTypes.string,
  }),
  interests: PropTypes.arrayOf(PropTypes.string),
};

export default UserCard;
