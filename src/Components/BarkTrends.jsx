/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BarkTrend from './BarkTrend';

const Wrapper = styled.div`
  flex: 1;
  padding: 2rem;
`;
const Trends = styled.div`
  background: ${(props) => props.theme.neutral300};
  border-radius: 20px;
  padding: 1rem 2rem;
  max-width: 32rem;
`;
const TrendList = styled.ul`
  list-style: nonr;
`;

function BarkTrends({ trends }) {
  return (
    <Wrapper>
      <Trends>
        <h2>Tendances pour vous</h2>
        <TrendList>
          { trends.map((trend) => (
            <BarkTrend
              key={trend.id}
              trend={trend}
            />
          )) }
        </TrendList>
      </Trends>
    </Wrapper>
  );
}

BarkTrends.defaultProps = {
  trends: [],
};

BarkTrends.propTypes = {
  trends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    hashtag: PropTypes.string.isRequired,
    barks: PropTypes.number.isRequired,
  })),
};
export default BarkTrends;
