import React from 'react';

const Login = () => {

  const onLogin = () => {
    const account = { username: 'admin', password: 'admin' };
  };

  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
