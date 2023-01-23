/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Album from './Album';

const LoreArt = 'https://via.placeholder.com/250/AAF/EEF?text=album-art';

function Albums() {
  const [album] = useState({
    title: 'Lore',
    art: LoreArt,
    performer: {
      type: 'band',
      name: 'Elder',
      from: 'Boston, US',
      formation: '2006',
    },
    year: '2015',
    tracks: [
      { title: 'Compendium', length: 639 },
      { title: 'Legend', length: 751 },
      { title: 'Lore', length: 958 },
      { title: 'Deadweight', length: 567 },
      { title: 'Spirit at Aphelion', length: 632 },
    ],
  });

  return (
    <div className="Albums Page-wrapper">
      <Album
        title={album.title}
        art={album.art}
        performer={album.performer}
        year={album.year}
        tracks={album.tracks}
      />
    </div>
  );
}

export default Albums;
