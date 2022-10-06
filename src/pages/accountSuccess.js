import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const AccountSuccessPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Conta criada</h1>
          <p>
            Enviamos um link de confirmação para ativar sua conta. Por favor,
            verifique seu e-mail e confirme.
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Contas'}
              icon={'user'}
              subtitle={'Verifique as configurações da sua conta'}
              link={'/account/settings'}
            />

            <ActionCard
              title={'Loja'}
              icon={'bag'}
              subtitle={'Continue comprando'}
              link={'/shop'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AccountSuccessPage;
