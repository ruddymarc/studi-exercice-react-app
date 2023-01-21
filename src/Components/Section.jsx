/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './Section.css';

function Section({ title, children }) {
  return (
    <section className="Section Wrapper">
      <h2 className="__heading">{ title }</h2>
      <div className="__content">
        { children }
      </div>
    </section>
  );
}

export default Section;
