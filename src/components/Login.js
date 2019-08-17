import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../base';
import { AuthContext } from '../Auth'

const Login = ({ history }) => {
  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push('/new')
    } catch (error) {
      alert(error);
    }
  }, [history]);

const { currentUser } = useContext(AuthContext);

if (currentUser) {
  return <Redirect to="/new" />;
}

  return(
    <div>
      <h1>Login In</h1>
      <form onSubmit={handleLogin}>
      <label> Email
        <input name="email" type="email" placeholder="email" />
      </label>
      <label> Password
        <input name="password" type="password" placeholder="password" />
      </label>
      <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default withRouter(Login)
