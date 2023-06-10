import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom/dist';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'redux/auth/authOperations';
import { selectUserIsLoggedin } from 'redux/auth/authSelectors';
import {
  CommonButton,
  CommonInput,
  CommonForm,
  Container,
} from './Pages.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  if (userLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  const signIn = e => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <Container>
      <CommonForm component={'form'} autoComplete="off" onSubmit={signIn}>
        <CommonInput
          required
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <CommonInput
          required
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <CommonButton variant="outlined" type="submit">
          Login
        </CommonButton>

        <Link to="/register">Haven't an account yet? Register.</Link>
      </CommonForm>
    </Container>
  );
}
