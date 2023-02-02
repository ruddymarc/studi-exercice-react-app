/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TrendStyled = styled.div`
margin-bottom: 1em;
display: flex;
display: flex;
flex-direction: column;
`;
const TrendCategory = styled.span`
display: flex;
align-items: center;
justify-content: space-between;
`;
const TrendAction = styled.button`
height: 1em;
cursor: pointer;
background: transparent;
border: none;
`;
const TrendHashtag = styled.span`
font-size: 1.2em;
font-weight: bold;
`;
const TrendInfo = styled.span``;

function Trend({
  category, hashtag, barks, action,
}) {
  return (
    <TrendStyled>
      <TrendCategory>
        { category }
        <TrendAction onClick={action}>°°°</TrendAction>
      </TrendCategory>
      <TrendHashtag>{ hashtag }</TrendHashtag>
      <TrendInfo>{ `${barks} Bark${barks > 1 ? 's' : null}` }</TrendInfo>
    </TrendStyled>
  );
}

Trend.defaultProps = {
  barks: 0,
};

Trend.propTypes = {
  category: PropTypes.string.isRequired,
  hashtag: PropTypes.string.isRequired,
  barks: PropTypes.number,
  action: PropTypes.func.isRequired,
};

export default Trend;
