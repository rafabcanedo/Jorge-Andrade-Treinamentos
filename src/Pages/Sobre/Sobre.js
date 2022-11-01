import React from 'react';
import './Sobre.css';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

import Avatar from '../../assets/test32.png';

const Sobre = () => {
 return(
 <section className='section-feedback'>
 <div className='title-feedback'>
 <h1>Sobre Mim</h1>
 <p>Um pouco sobre meu trabalho</p>
 </div>

 <div className='container-sobre'>
  <div className='sobre-ctnmim'>
  <div className='sobremim-image'>
  <img src={Avatar} alt="Avatar" />
  </div>
  </div>

  <div className='content-sobre'>
  <div className='sobre-cards'>
  <article className='sobre-card'>
   <FaAward className='sobre-icon' />
   <h5>Experiência</h5>
   <p>+3 anos de trabalho</p>
  </article>
  
  <article className='sobre-card'>
   <FiUsers className='sobre-icon' />
   <h5>Mentorando</h5>
   <p>+100 de mentorados</p>
  </article>

  <article className='sobre-card'>
   <VscFolderLibrary className='sobre-icon' />
   <h5>Projetos</h5>
   <p>+4 projetos em andamento</p>
  </article>
  </div>

  <p className='text-sobremain'>
  Eu sou Jorge Andrade, professor a mais de 15 anos, 
  desde de sempre buscando conhecimento inovador. 
  hoje trabalho como mentor de produtividade e tenho uma paixão 
  de transformar a vida das pessoas para elas alcançarem seus objetivos 
  com clareza, foco e disciplina.
  </p>

  <div className='btn-sobrepage'>
  <a className='btn-proj-sobre' href="https://linktr.ee/eusoujorgeandrade">
    Projetos
  </a>
  </div>

  </div>
 </div>
 </section>
 );
}

export default Sobre;