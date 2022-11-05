import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Muito Obrigado!</h1>
          <p>
            Já estamos processando seu pedido. Se você tiver alguma dúvida,
            sinta-se à vontade para nos enviar um e-mail para streeart@gmail.com
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Status do pedido'}
              icon={'delivery'}
              subtitle={'Verifique o status do seu pedido'}
              link={'/account/orders'}
              size={'lg'}
            />

            <ActionCard
              title={'Shop'}
              icon={'bag'}
              subtitle={'Continue Shopping'}
              link={'/shop'}
            />

            <ActionCard
              title={'FAQs'}
              icon={'question'}
              subtitle={'Check out FAQs page'}
              link={'/faq'}
            />

            <ActionCard
              title={'Contate-nos'}
              icon={'phone'}
              subtitle={'Estenda a mão para nós'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
