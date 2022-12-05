import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import axios from 'axios';
import { validateEmail, isEmpty } from '../helpers/general';
import * as styles from './login.module.css';

import AttributeGrid from '../components/AttributeGrid/AttributeGrid';
import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';

const LoginPage = (props) => {
  const initialState = {
    email: '',
    password: '',
  };

  const errorState = {
    email: '',
    password: '',
  };

  const [loginForm, setLoginForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (id, e) => {
    const tempForm = { ...loginForm, [id]: e };
    setLoginForm(tempForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorForm };

    if (validateEmail(loginForm.email) !== true) {
      tempError.email =
        'Use um endereço de e-mail válido, como user@example.com.';
      validForm = false;
    } else {
      tempError.email = '';
    }

    if (isEmpty(loginForm.password) === true) {
      tempError.password = 'Campo obrigatório';
      validForm = false;
    } else {
      tempError.password = '';
    }

    if (validForm === true) {
      setErrorForm(errorState);

      const response = await axios.post(
        'http://localhost:9797/users/login',
        loginForm
      );
      if (response.status === 201) {
        navigate('/');
      } else {
        window.scrollTo(0, 0);
        setErrorMessage(
          'Não existe tal conta associada a este endereço de e-mail'
        );
      }
      //mock login
      // if (loginForm.email !== 'error@example.com') {
      //   navigate('/conta');
      //   window.localStorage.setItem('key', 'sampleToken');
      // } else {
      // }
    } else {
      setErrorMessage('');
      setErrorForm(tempError);
    }
  };

  return (
    <Layout disablePaddingBottom={true}>
      <div
        className={`${styles.errorContainer} ${
          errorMessage !== '' ? styles.show : ''
        }`}
      >
        <span className={styles.errorMessage}>{errorMessage}</span>
      </div>

      <div className={styles.root}>
        <div className={styles.loginFormContainer}>
          <h1 className={styles.loginTitle}>Login</h1>
          <span className={styles.subtitle}>
            Por favor entre com seu e-mail e senha
          </span>
          <form
            noValidate
            className={styles.loginForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInputField
              id={'email'}
              value={loginForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              error={errorForm.email}
            />

            <FormInputField
              id={'password'}
              value={loginForm.password}
              handleChange={(id, e) => handleChange(id, e)}
              type={'password'}
              labelName={'Senha'}
              error={errorForm.password}
            />
            <div className={styles.forgotPasswordContainer}>
              <Link to={'/forgot'} className={styles.forgotLink}>
                Esqueci a senha
              </Link>
            </div>

            <Button fullWidth type={'submit'} level={'primary'}>
              LOGIN
            </Button>
            <span className={styles.createLink}>Novos Clientes? </span>
            <Button
              type={'button'}
              onClick={() => navigate('/signup')}
              fullWidth
              level={'secondary'}
            >
              Criar conta
            </Button>
          </form>
        </div>

        <div className={styles.attributeGridContainer}>
          <AttributeGrid />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
