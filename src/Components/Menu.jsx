/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';
import BarkerLogo from '../assets/images/corgi.svg';

const Wrapper = styled.div`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Logo = styled.img`
  width: 80px;
`;
const Button = styled.button`
  background: ${(props) => props.theme.brand};
  border: none;
  height: 50px;
  padding: 0 4rem;
  border-radius: 25px;
  color: ${(props) => props.theme.neutral100};
  font-weight: bold;
  font-size: 1.15rem;
  margin-top: 4rem;
`;

function Menu() {
  return (
    <Wrapper>
      <Logo src={BarkerLogo} />
      <Button>Barker</Button>
    </Wrapper>
  );
}

export default Menu;
