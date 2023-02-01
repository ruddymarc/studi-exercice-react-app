/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const ImageStyled = styled.img`
  display: block;
  width: 80%;
  margin: auto;
  height: auto;
  border-radius: ${(props) => props.theme.rounded};
`;

function Image({ url }) {
  return (
    <ImageStyled src={url} />
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
