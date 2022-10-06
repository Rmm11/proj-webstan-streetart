import React, { useState } from 'react';
import { validateEmail } from '../helpers/general';
import * as styles from './forgot.module.css';

import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';
import AttributeGrid from '../components/AttributeGrid';

const ForgotPage = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) !== true) {
      setError('Não é um endereço de e-mail válido');
      return;
    }
    setEmail('');
    setError('');
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <h1 className={styles.title}>Redefinir senha</h1>
        <p className={styles.message}>
          Preencha seu e-mail abaixo para solicitar uma nova senha. Um e-mail
          será enviado para o endereço abaixo contendo um link para verificar
          seu endereço de e-mail.
        </p>
        <form
          className={styles.formContainer}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormInputField
            id={'email'}
            value={email}
            handleChange={(_, e) => setEmail(e)}
            type={'email'}
            labelName={'Email'}
            error={error}
          />
          <div className={styles.buttonContainer}>
            <Button fullWidth level={'primary'} type={'submit'}>
              redefinir a senha
            </Button>
          </div>
        </form>
      </div>
      <div className={styles.gridContainer}>
        <AttributeGrid />
      </div>
    </Layout>
  );
};

export default ForgotPage;
