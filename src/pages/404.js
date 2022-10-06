import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './404.module.css';

import Button from '../components/Button';
import Container from '../components/Container';
import FormInputField from '../components/FormInputField/FormInputField';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>404 Error</h1>
          <h2>Página não encontrada</h2>
          <p>
            Uh oh, parece que a página que você está procurando foi movida ou
            não mais existe.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.searchContainer}>
              <FormInputField
                id={'name'}
                value={search}
                handleChange={(_, e) => setSearch(e)}
                type={'text'}
              />
              <Button type={'submit'} level={'primary'}>
                Procurar
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
