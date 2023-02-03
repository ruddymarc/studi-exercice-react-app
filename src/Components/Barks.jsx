/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Bark from './Bark';

const Wrapper = styled.div`
  flex: 2;
  max-width: 40rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-x: auto;
  border-left: 2px solid ${(props) => props.theme.neutral200}; 
  border-right: 2px solid ${(props) => props.theme.neutral200};
`;

function Barks({ barks }) {
  return (
    <Wrapper>
      { barks.map((bark) => (
        <Bark
          key={bark.id}
          bark={bark}
        />
      )) }
    </Wrapper>
  );
}

Barks.defaultProps = {
  barks: [],
};

Barks.propTypes = {
  barks: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    author: PropTypes.exact({
      name: PropTypes.string.isRequired,
      accountName: PropTypes.string.isRequired,
      verified: PropTypes.bool.isRequired,
      picture: PropTypes.string.isRequired,
    }),
    posted: PropTypes.exact({
      time: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
  })),
};

export default Barks;
