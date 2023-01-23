/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import './Album.css';

function Album({
  title, genre, performer, art, year, tracks,
}) {
  const tracksDisplay = tracks.map((song) => (
    <li key={song.title} className="Track">
      <div className="Track_NameWrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
        {' '}
        <span className="Track__Name">{song.title}</span>
      </div>
      <div className="Track_Action">
        <span className="TrackLength">
          {Math.round((song.length / 60) * 100) / 100}
          &quot;
        </span>
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </li>
  ));

  return (
    <div className="Album">
      <img
        src={art}
        alt="art-style"
        className="Album_Art"
      />
      <div className="Album_Description">
        <span className="Album__Year">{year}</span>
        <h2 className="Album__Title">{title}</h2>
        <span className="Album__Performer">{performer.name}</span>
        <span className="Album__Cenre">{genre}</span>
      </div>
      <ul className="Album_Tracks">
        {tracksDisplay}
      </ul>
    </div>
  );
}

Album.defaultProps = {
  title: '',
  genre: '',
  performer: { name: '' },
  art: '',
  year: '',
  tracks: [],
};

Album.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.oneOf(['Jazz', 'Blues', 'Rock', 'R&B', 'Classique']),
  performer: PropTypes.shape({
    name: PropTypes.string,
  }),
  art: PropTypes.string,
  year: PropTypes.string,
  tracks: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    length: PropTypes.number,
  })),
};

export default Album;
