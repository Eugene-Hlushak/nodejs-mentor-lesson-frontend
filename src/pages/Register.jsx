import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom/dist';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from 'redux/auth/authOperations';
import { selectUserIsLoggedin } from 'redux/auth/authSelectors';
import { Container, CommonButton, CommonForm } from './Pages.styled';
import { TextField } from '@mui/material';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  const signUp = e => {
    e.preventDefault();
    dispatch(userRegister({ name, email, password }));
  };

  if (userLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <Container>
      <CommonForm component={'form'} autoComplete="off" onSubmit={signUp}>
        <TextField
          required
          label="Name"
          type="text"
          variant="outlined"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ mb: '10px', width: '500px' }}
        />
        <TextField
          required
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ mb: '10px', width: '500px' }}
        />

        <TextField
          required
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ mb: '10px', width: '500px' }}
        />
        <CommonButton variant="outlined" type="submit">
          Register
        </CommonButton>

        <Link to="/">Already have an account? Login.</Link>
      </CommonForm>
    </Container>
  );
}
