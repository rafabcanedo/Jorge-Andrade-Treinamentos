import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

import { FaInstagram, FaWhatsapp, FaBook, FaExternalLinkAlt  } from 'react-icons/fa';

const Section = styled.section`
 margin-top: 4rem;
 padding: 4rem;
 background-color: ${props => props.theme.body};
 position: relative;
 color: ${(props) => props.theme.text};
 left: 0;
 width: 100%;
 display: flex;
 flex-direction: column;
`

const Container = styled.div`
 width: 75%;
 margin: 2rem auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-bottom: 1px solid ${(props) => props.theme.text};
 @media (max-width: 48em) {
   width: 90%;
 }
 h1 {
   font-size: ${props => props.theme.fontxxxl};
 }
`

const Left = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 @media (max-width: 48em) {
   width: 100%;
 }
`

const IconList = styled.div`
 display: flex;
 align-items: center;
 margin: 1rem auto;
 &>* {
     padding-right: 0.5rem;
     transform: all 0.2s ease;
    
    &:hover {
     transform: scale(1.2);
    }
 }
`

const MenuItems = styled.ul`
 list-style: none;
 width: 50%;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(3, 1fr);
 grid-gap: 1rem;
 @media (max-width: 48em) {
   display: none;
 }
`

const Item = styled.li`
 width: fit-content;
 cursor: pointer;
 font-family: "Poppins", sans-serif;
 &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }
  &:hover::after{
    width: 100%;
  }
`

const Bottom = styled.div`
 width: 75%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
 a{
     text-decoration: underline;
     color: inherit;
 }
 @media (max-width: 48em) {
   flex-direction: column;
   width: 100%;
   span {
     margin-bottom: 1rem;
   }
 }
`

const Footer = () => {
    return (
    <Section>
     <Container>
      <Left>
       <Logo />
       <IconList>
        <a href='https://www.instagram.com/eusoujorgeandrade/' target="_blank"
        rel="noreferrer"
        >
        <FaInstagram />
        </a>
        <a href="https://contate.me/jorgeandrade" target="_blank"
        rel="noreferrer"
        >
        <FaWhatsapp />
        </a>
        <a href='https://jorge-augusto-nascimento-de-andrade-de08.herospark.co/p/comunidade-lendo-e-aplicando' target="_blank"
        rel="noreferrer"
        >
        <FaBook />
        </a>
        <a href='https://linktr.ee/eusoujorgeandrade' target="_blank"
        rel="noreferrer"
        >
        <FaExternalLinkAlt />
        </a>
       </IconList>
      </Left>
      <MenuItems>
       <Item>Home</Item>
       <Item>Sobre</Item>
       <Item>Projetos</Item>

       <Item>Comunidade</Item>
      </MenuItems>   
     </Container>
      <Bottom>
       <span>
         &copy; {new Date().getFullYear()} Canedo. All rights reserved.
       </span>
      </Bottom>  
    </Section>
    )
}

export default Footer;