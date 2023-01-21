/* eslint-disable import/no-unresolved */
import React from 'react';
import UserCard from '../Components/UserCard';
import Section from '../Components/Section';
import './UserProfile.css';

const HarveyPicture = './joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';

function UserProfile() {
  const user = {
    firstname: 'Harvey',
    lastname: 'Kunkel',
    location: {
      country: 'United States',
      city: 'Nashua',
    },
    age: 43,
    picture: HarveyPicture,
    interests: [
      'Cinematic FPV drone',
      'Hiking',
      'Music',
    ],
  };

  return (
    <div className="UserProfile Page-wrapper">
      <UserCard
        picture={user.picture}
        firstname={user.firstname}
        lastname={user.lastname}
        age={user.age}
        location={user.location}
        interests={user.interests}
      />
      <main>
        <Section title="Center of interest">
          {user.interests.map((label) => (
            <span className="interest">{label}</span>
          ))}
        </Section>
      </main>
    </div>
  );
}

export default UserProfile;
