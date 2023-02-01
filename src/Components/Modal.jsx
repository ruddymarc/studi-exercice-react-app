/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  font-size: ${(props) => props.theme.fontSize};
`;
const ModalStyled = styled.div`
  width: ${(props) => props.theme.medium};
  height: 90%;
  min-height: 10rem;
  position: relative;
  border-radius: ${(props) => props.theme.rounded};
  background-color: ${(props) => props.theme.neutral0};
  box-shadow: 3px 3px 10px ${(props) => props.theme.neutral100};
`;
const CloseModal = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: inherit;
  border: none;
  background: none;
  font-size: 1.5em;
`;
const ModalHeading = styled.h2`
  margin: 0;
  text-align: center;
  color: ${(props) => props.theme.neutral300}
`;
const ModalContent = styled.div`
  height: 90%;
  margin: .5em;
  padding: .3rem;
  overflow: scroll;
  text-align: justify;
  font: ${(props) => props.theme.font};
  border: thin inset ${(props) => props.theme.neutral0};
`;
const ModalActions = styled.div`
  display: flex;
  row-wrap: wrap;
  justify-content: end;
`;

function Modal({
  title, children, actions, onClose,
}) {
  return (
    <ModalWrapper>
      <ModalStyled>
        <CloseModal onClick={onClose}>&times;</CloseModal>
        <ModalHeading>{title}</ModalHeading>
        <ModalContent>
          {children}
          <ModalActions>{actions}</ModalActions>
        </ModalContent>
      </ModalStyled>
    </ModalWrapper>
  );
}

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  actions: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
