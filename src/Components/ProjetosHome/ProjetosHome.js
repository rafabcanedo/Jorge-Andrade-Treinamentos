import React from 'react';
import './ProjetosHome.css';

import img1 from '../../assets/letspushlogo.jpg';
import img2 from '../../assets/comunidade.jpg';
import img3 from '../../assets/arte1.jpg';

const data = [
 {
  id: 1,
  image: img1,
  title: "Mentoria",
  description:
  "Aqui vou ensinar você a despertar sua força interior através dos seus hábitos com clareza e foco."
 },
 {
  id: 2,
  image: img2,
  title: "Comunidade",
  description:
  "Você vai aprender a tomar as melhores decisões, transformar a leitura e o estudo em um hábito, além de estar em um ambiente de troca e crescimento constante."
 },
 {
  id: 3,
  image: img3,
  title: "Canal no Youtube",
  description:
  "Meu canal no Youtube, onde posto conteúdo de auto conhecimento e produtividade."
 },
]

const ProjetosHome = () => {
 return(
    <>
    <section className='section-feedback'>
    <div className='title-feedback'>
    <h1>Projetos</h1>
    <p>Aqui está alguns dos meus projetos</p>
    </div>
   </section>
   <div className='projetos-home'>
   {data.map(({id, image, title, description}) => {
    return (
     <div className='projetos-home-card' key={id}>
     <img src={image} alt="projetos" className='produtos-home-img' />

     <h3 className='produtos-home-title'>{title}</h3>
     <p className='produtos-home-description'>{description}</p>
     </div>
    );
   })}
   </div>
   </>
 );
}

export default ProjetosHome;