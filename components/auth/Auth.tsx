import React, { useEffect, useState } from 'react';

import { validateEmail } from './validation';

import { Button, Form, H1, Input, Error } from '../../styles/Auth.styled';

import { useDispatch } from 'react-redux';
import { update } from '../../redux/slices/email';

import { getCookieValue, updateCookie } from '../../services/functions';

const errorInitial = {
  visible: false,
  message: '',
};

export default function Auth() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState(errorInitial);

  const dispatch = useDispatch();

  useEffect(function () {
    const storedEmail = getCookieValue('email');

    if (storedEmail.length) dispatch(update.update(storedEmail));
  }, []);

  function submitForm(e: React.FormEvent): void {
    e.preventDefault();

    const shallowError = validateEmail(email);

    if (shallowError.visible) return setError(shallowError);

    updateCookie('email', email, false);

    dispatch(update.update(email));
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setError({ ...errorInitial });
    setEmail(e.target.value);
  }

  return (
    <Form onSubmit={submitForm}>
      <H1>Login</H1>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleInputChange}
        theme={{
          border: error.visible ? '0.5px solid #dc3545' : '0.5px solid black',
          shadow: error.visible
            ? '0 0 0.5rem 0.20rem #a71d2b !important'
            : '0 0 0.5rem 0.20rem #00000090',
        }}
      />

      {error.message.length ? <Error>{error.message}</Error> : null}

      <Button
        type="submit"
        value="Submit"
        theme={{
          border: '0.5px solid black',
          shadow: '0 0 0.5rem 0.20rem #00000090',
        }}
      />
    </Form>
  );
}
