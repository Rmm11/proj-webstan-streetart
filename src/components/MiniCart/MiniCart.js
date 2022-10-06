import { Link, navigate } from 'gatsby';
import React from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const sampleCartItem = {
    image: '/products/pdp1.jpeg',
    alt: '',
    name: 'Blusa azul com botões',
    price: 220,
    color: 'Melange Antracite',
    size: 'PP',
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Meu carrinho</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        <MiniCartItem {...sampleCartItem} />
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (BR)</span>
            <span>
              <CurrencyFormatter amount={220} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Impostos e frete serão calculados no checkout
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            Confira
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>continue comprando</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
