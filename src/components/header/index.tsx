import { useState } from 'react';
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onRequestOpenTransactionModal: () => void;
}

export function Header({onRequestOpenTransactionModal}:HeaderProps) {

  

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onRequestOpenTransactionModal} >Nova transação</button>

      

      </Content>
    </Container>
  );
}
