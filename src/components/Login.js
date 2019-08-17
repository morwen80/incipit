import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
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
    <div className="container login">
      <h3>You need to be logged in to add a new prompt</h3>
      <hr />
      New here? <Link to='/signup'>Create an account</Link>.

      <form onSubmit={handleLogin}>
        <div class="form-group">
          <label> Email </label>
          <input className="form-control" name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label> Password </label>
          <input className="form-control" name="password" type="password" placeholder="password" />
      </div>
      <button type="submit" className="btn btn-primary">Log in</button>
      </form>
      </div>
  )
}


export default withRouter(Login)
