/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
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

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
