import React from 'react';
import styled from 'styled-components';
import './Comunidade.css';
import ReactPlayer from 'react-player';

const SubText = styled.h3`
 color: #a19d9d;
`;

const A = styled.a`
 color: white;
`;

const Comunidade = () => {
    return (
        <>
         <section className='section-comunidade' id='comunidade'>
             <div className='container'>
                 <div className='heading-text-center'>
                     <h1>COMUNIDADE</h1>
                     <p>Venha transformar o seu mundo através da leitura e aplicação desses clássicos do desenvolvimento pessoal.</p>
                 </div>

                 <div className='heading-text-center'>
                     <SubText>Na Comunidade Lendo e Aplicando você vai potencializar a sua maneira de ler livros.</SubText>
                 </div>

                 <div className='video'>
                 <ReactPlayer url='https://www.youtube.com/watch?v=NB7pdAWxkRU&t=3s' />
                 </div>

                    <div className='heading-text-center'>
                    <div className='text_intro'>
                     <h4>Assinatura mensal:</h4>
                    </div>
                    <div className='text_value'>
                     <h2>R$ 27,00</h2>
                    </div>
                 </div>

                <div className='btn_center'>
                <A className='btn_link' href="https://pay.herospark.com/assinatura-mensal-36832">
                    Quero Me Increver
                </A>
                </div>
             </div>
         </section>
        </>
    )
}

export default Comunidade;