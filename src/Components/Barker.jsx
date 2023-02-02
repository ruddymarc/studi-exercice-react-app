/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrapper = styled.li`
gap: 1em;
margin: 1em;
display: flex;
align-items: center;
`;
const Image = styled.img`
width: 4rem;
height: auto;
border-radius: 50%;
`;
const Bark = styled.div`
`;
const BarkHeading = styled.div`
gap: 1em;
display: inline-flex;
align-items: center;
h3 { margin: 0 }
`;
const BarkContent = styled.div`
line-height: 1em;
max-height: 2em;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
text-overflow: ellipsis;
`;

function Barker({
  author, posted, content,
}) {
  return (
    <Wrapper>
      <Image src={author.picture} />
      <Bark>
        <BarkHeading>
          <h3>{ author.name }</h3>
          {[
            author.accountName,
            '-',
            parseInt(posted.time, 10),
            posted.unit,
          ].join(' ')}
        </BarkHeading>
        <BarkContent>{ content }</BarkContent>
      </Bark>
    </Wrapper>
  );
}

Barker.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    accountName: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
  posted: PropTypes.shape({
    time: PropTypes.number,
    unit: PropTypes.string,
  }).isRequired,
  content: PropTypes.string.isRequired,
};

export default Barker;
