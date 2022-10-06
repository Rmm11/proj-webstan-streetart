import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`StreetArt \n Uma marca Brasileira e Alemã desde 2022`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            História
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Valores
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustentabilidade
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Fundada em 2022, StreetArt e uma marca brasileira e alemã
              inovadora com um toque contemporâneo. Fazemos roupas com qualidade
              e luxo atemporais para o dia a dia.
            </p>
            <br />
            <br />
            <p>
              {' '}
              Criamos algumas das primeiras camisetas do mundo e passamos um ano
              aperfeiçoando a sensação do algodão. Hoje somos a única marca que
              fabrica roupas com qualidade e confortáveis para cada cliente.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Nossos Valores</h3>
            <div ref={valuesRef}>
              <p>
                O Hewerton produziu algumas das primeiras camisetas do mundo. No
                final de 2021, a empresa fabricava blusas e camisetas de luxo de
                algodão leve, e faz exportação da Alemanha para o Brasil, e
                outros países quentes e frios. Embora essas roupas são renovadas
                a cada meses ou menos de uma semana, com cada novidade e
                inovação nos nossos produtos.
              </p>
              <ol>
                <li>Seja um model, para nossa empresa</li>
                <li>Sofisticado e nunca vai amassar o tecido</li>
                <li>Apenas materiais naturais</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Sustentabilidade</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Nosso fundador Rafael Medrado, tem um olho para qualidade e um
                desejo de inovar as divulgações e claro criar o maior site de
                vendas de roupas do mundo.
              </p>
              <p>
                E todos os designers foram feitos por Hewerton e seu parceiro
                José Carlos, foram feitos com luxos o algodão Supima de fibra
                longa para suavidade, conforto e conforto incomparáveis, e claro
                a durabilidade das roupas. O modelo de roupa que mais vendeu
                desses dois, foi o Sunspel, tem uma modelagem clássica e apenas
                detalhes mais essenciais e maravilhosa no mercado.{' '}
              </p>
              <p>
                Com mais de 1 ano aperfeiçoando o tecido, ajuste e estilo em
                cada camisetas clássicas da loja, cada roupa é reconhecida como
                a melhor do mundo.{' '}
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
