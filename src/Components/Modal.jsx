/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  display: block;
  position: sticky;
  top: 1em;
  z-index: 999999;
  background-color: #eff5f2;
  border-radius: .5em;
  box-shadow: 3px 3px 10px rgba(0 0 0 / 0.5);
`;
const CloseModal = styled.button`
  color: inherit;
  border: none;
  background: none;
  font-size: 1.5em;
  position: absolute;
  top: 0;
  right: 0;
  margin-left: auto;
`;
const ModalHeading = styled.h2`
  margin: 0;
  text-align: center;
`;
const ModalContent = styled.div`
  max-height: 80vh;
  margin: .5em;
  padding: .5em;
  overflow: scroll;
  border: thin inset #eff5f2;
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
      <CloseModal onClick={onClose}>&times;</CloseModal>
      <ModalHeading>{title}</ModalHeading>
      <ModalContent>{children}</ModalContent>
      <ModalActions>{actions}</ModalActions>
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
