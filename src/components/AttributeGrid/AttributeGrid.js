import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'entrega gratuita em todo o mundo'}
        subtitle={'Clique para aprender mais'}
      />
      <Attribute
        icon={'cycle'}
        title={'retorna'}
        subtitle={'Devolução de mercadorias em 30 dias'}
      />
      <Attribute
        icon={'creditcard'}
        title={'pagamento seguro'}
        subtitle={'Compre com segurança'}
      />
    </div>
  );
};

export default AttributeGrid;
