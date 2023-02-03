/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
margin: 1rem 0;
padding-bottom: 1rem;
span {
  display: block;
  line-height: 1.5rem;
}
&:not(:last-of-type) {
  border-bottom: 1px solid ${(props) => props.theme.neutral400};
}
`;
const Hashtag = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

function BarkTrend({ trend }) {
  return (
    <Wrapper>
      <span>
        Tendance dans la catégorie
        {' '}
        {trend.category}
      </span>
      <Hashtag>{trend.hashtag}</Hashtag>
      <span>{ `${trend.barks} Bark${trend.barks > 1 ? 's' : null}` }</span>
    </Wrapper>
  );
}

BarkTrend.propTypes = {
  trend: PropTypes.exact({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    hashtag: PropTypes.string.isRequired,
    barks: PropTypes.number.isRequired,
  }).isRequired,
};

export default BarkTrend;
