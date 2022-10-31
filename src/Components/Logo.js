import React from 'react';
import styled from 'styled-components';
import Image from '../assets/logo.png';

const Img = styled.img`
 cursor: pointer;
 &:hover {
     transform: scale(1.1);
 }
`;

const Logo = () => {
 return (
  <Img src={Image} alt='LogoNav' />
 );
}

export default Logo;