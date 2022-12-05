import React, { useState } from 'react';
import { navigate } from 'gatsby';
import {
  validateEmail,
  validateStrongPassword,
  isEmpty,
} from '../helpers/general';
import * as styles from './signup.module.css';

import AttributeGrid from '../components/AttributeGrid/AttributeGrid';
import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';
import axios from 'axios';

const SignupPage = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const errorState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [signupForm, setSignupForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...signupForm, [id]: e };
    setSignupForm(tempForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (isEmpty(signupForm.firstName) === true) {
      tempError.firstName = 'Campo obrigatório';
      validForm = false;
    }

    if (isEmpty(signupForm.lastName) === true) {
      tempError.lastName = 'Campo obrigatório';
      validForm = false;
    }

    if (validateEmail(signupForm.email) !== true) {
      tempError.email =
        'Use um endereço de e-mail válido, como user@example.com.';
      validForm = false;
    }

    if (validateStrongPassword(signupForm.password) !== true) {
      tempError.password =
        'A senha deve ter pelo menos 8 caracteres, 1 minúscula, 1 maiúscula e 1 caractere numérico.';
      validForm = false;
    }

    if (validForm === true) {
      setErrorForm(errorState);
      const response = await axios.post(
        'http://localhost:9797/users/register',
        signupForm
      );
      console.log(response.data);
      navigate('/accountSuccess');
      window.localStorage.setItem('key', 'sampleToken');
      //create account endpoint
    } else {
      setErrorForm(tempError);
    }
  };

  return (
    <Layout disablePaddingBottom={true}>
      <div className={styles.root}>
        <div className={styles.signupFormContainer}>
          <h1 className={styles.title}>Criar uma conta</h1>
          <span className={styles.subtitle}>
            Por favor, insira suas informações abaixo:
          </span>
          <form
            noValidate
            className={styles.signupForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInputField
              id={'firstName'}
              value={signupForm.firstName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Primeiro nome'}
              error={errorForm.firstName}
            />

            <FormInputField
              id={'lastName'}
              value={signupForm.lastName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Sobrenome'}
              error={errorForm.lastName}
            />

            <FormInputField
              id={'email'}
              value={signupForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              error={errorForm.email}
            />

            <FormInputField
              id={'password'}
              value={signupForm.password}
              handleChange={(id, e) => handleChange(id, e)}
              type={'password'}
              labelName={'Senha'}
              error={errorForm.password}
            />

            <Button fullWidth type={'submit'} level={'primary'}>
              Criar conta
            </Button>
            <span className={styles.reminder}>Já tem uma conta?</span>
            <Button
              type={'button'}
              onClick={() => navigate('/login')}
              fullWidth
              level={'secondary'}
            >
              login
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

export default SignupPage;
