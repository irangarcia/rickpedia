import React from 'react';
import { HeaderContainer, Logo } from '../styles/styles';

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo src={'https://i.imgur.com/KeWYRSS.png'} alt={'Logo'} />
      </a>
    </HeaderContainer>
  );
};

export default Header;
