import React from 'react';
import './Home.css';
import image from '../../assets/logoJorge.jpg';

import Carrosel from '../../Components/Carrosel';

// icons
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ProjetosHome from '../../Components/ProjetosHome/ProjetosHome';

  const Home = () => {
    return (
      <>
        <section className='section-home' id='home'>
          <div className='container-home'>
            <div className='left-top'>
              <h3 className='h3-home'>
               Seja Bem Vindo
              </h3>
              <h1 className='h1-home'>
                Eu sou <span className='span-home'>Jorge Andrade</span>
              </h1>
              <h2 className='h2-home'>
                um <span className='span-home'>Mentor de Produtividade e gestão de tempo</span>
              </h2>
  
              <p className='p-home'>
               Professor a mais de 15 anos, mentor de produtividade e um apaixonado por conhecimento. Desenvolveu a paixão pela leitura desde a infância e se tornou um leitor voraz que coloca em prática toda a sabedoria adquirida através das leituras.
              </p>
  
              <div className='cnt-btn-redes'>
                <div className='col_1'>
                  <h4 className='h4-home'>Redes Sociais</h4>
                  <div className='button'>
                    <button className='btn_shadow'>
                    <a href="https://www.instagram.com/eusoujorgeandrade/">
                    <FaInstagram size="15px" />
                    </a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://contate.me/jorgeandrade">
                    <FaWhatsapp size="15px" />
                    </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='right-home'>
              <div className='right_img'>
                <img src={image} alt='Perfil Jorge Andrade' />
              </div>
            </div>
          </div>
        </section>

          <section className='section-feedback'>
           <div className='title-feedback'>
           <h1>Feedbacks</h1>
           <p>Veja o que o pessoas está falando</p>
           </div>
          </section>
        <div className='container-carrosel'>
          <Carrosel />
        </div>

        <div>
        <ProjetosHome />
        </div>
      </>
    )
  }
  
  export default Home;