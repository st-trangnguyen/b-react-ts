import React from 'react';
import { useDispatch } from 'react-redux';

import { signIn } from '../auth.middleware';
import { store } from '@app/store';

const Login = () => {
  const useAppDispatch = () => useDispatch<typeof store.dispatch>();
  const dispatch = useAppDispatch();

  const onLogin = () => {
    const account = { username: 'admin', password: 'admin' };
    dispatch(signIn(account));
  };

  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
