import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Masculino'}
        text={'COMPRE AGORA'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Feminino'}
        text={'COMPRE AGORA'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Acessórios'}
        text={'COMPRE AGORA'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Algodão Simples'}
        text={'COMPRE AGORA'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
