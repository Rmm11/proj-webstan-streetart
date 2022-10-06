import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Bem-vindo ao StreetArt, a melhor loja da faculdade Eniac'}
        subtitle={'Descubra as novidades dê novembro'}
        ctaText={'COMPRE AGORA'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Esta é uma demonstração do tema inverno e primavera, feito pelo
          designer <span className={styles.gold}>Hewerton</span>.
        </p>
        <p>
          E o companheiro de Hewerton é{' '}
          <span className={styles.gold}>José Carlos</span>, um dos maiores
          vendedores da nossa geração.{' '}
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Novas coleções'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title
            name={'Novas novidades'}
            link={'/shop'}
            textLink={'ver tudo'}
          />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Malha de luxo'}
            description={`Este suéter macio é de cordeiro, tricotado na Escócia feito pelo Hewerton, usando fios de uma das fiandeiras mais antigas do mundo.`}
            textLink={'Compre agora'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero
          image={'/banner2.png'}
          title={`-50% off \n Em todos os produtos`}
        />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>Feminino</Link>
          <Link to={'/shop'}>Masculino</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Sobre StreetArt'}
        quote={
          '“Acreditamos em duas coisas: a busca pela qualidade em tudo o que fazemos e o cuidado mútuo por cada pessoa e estilo.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title
            name={'Comentários'}
            subtitle={'Notas sobre vida e estilo da nossa loja'}
          />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/banner3.png'}
          title={'Somos Sustentáveis'}
          subtitle={
            'Desde cuidar de nossa terra até apoiar nosso povo, descubra os passos que estamos tomando para fazer mais pelo mundo ao nosso redor.'
          }
          ctaText={'Consulte mais informações'}
          maxWidth={'760px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Estilizado por você'}
          subtitle={'Marque @StreetArt para ser destaque na nossa loja.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
