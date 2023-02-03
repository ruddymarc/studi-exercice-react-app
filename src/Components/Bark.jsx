/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrapper = styled.div` width: 100%;
  padding: 1rem;
  display: flex; justify-content: space-between;
  &:not(:last-of-type) {
    border-bottom: 2px solid ${(props) => props.theme.neutral200};
  }
`;
const Picture = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;
const Content = styled.div`
  width: calc(100% - 60px);
  padding: 0.75rem 0.5rem;
`;
const User = styled.div`
  margin-bottom: 0.5rem;
`;
const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: blod;
  margin-right: 0.5rem;
`;
const UserAccount = styled.span`
  color: ${(props) => props.theme.neutral600}
`;
const BarkedAt = styled.span`
  color: ${(props) => props.theme.neutral600}
`;

function Bark({ bark }) {
  return (
    <Wrapper>
      <Picture src={bark.author.picture} alt="author" />
      <Content>
        <User>
          <UserName>{ bark.author.name }</UserName>
          <UserAccount>
            @
            {bark.author.accountName}
          </UserAccount>
          <BarkedAt>
            {` . ${[parseInt(bark.posted.time, 10), bark.posted.unit].join('')}`}
          </BarkedAt>
        </User>
        {bark.content}
      </Content>
    </Wrapper>
  );
}

Bark.propTypes = {
  bark: PropTypes.exact({
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
  }).isRequired,
};

export default Bark;
