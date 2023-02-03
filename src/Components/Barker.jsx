/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';
import Menu from './Menu';
import Barks from './Barks';
import BarkTrends from './BarkTrends';
import data from '../data.json';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

function Barker() {
  const { barks, trends } = data;

  return (
    <Wrapper>
      <Menu />
      <Barks barks={barks} />
      <BarkTrends trends={trends} />
    </Wrapper>
  );
}

export default Barker;
